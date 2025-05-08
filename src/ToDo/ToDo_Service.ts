import { Injectable, NotFoundException } from '@nestjs/common';
import { Todo } from './ToDo_Interface';
import {CreateTodoDto} from './Create-ToDo.dto'
import { UpdateTodoDto } from './Update-ToDo.dto';

@Injectable()
export class TodoService {
  private todos: Todo[] = [];
  private idCounter = 1;

  findAllTodo(): Todo[] {
    return this.todos;
  }

  findOneTodo(id: number): Todo {
    const todo = this.todos.find((td) => td.id === id);
    if (!todo) {
      throw new NotFoundException('Todo not found');
    }
    return todo;
  }

  create(createTodoDto: CreateTodoDto): Todo {
    const newTodo: Todo = {
      id: this.idCounter++,
      title: createTodoDto.title,
      description: createTodoDto.description,
      isCompleted: false,
    };
    this.todos.push(newTodo);
    return newTodo;
  }

  update(id: number, updateTodoDto: UpdateTodoDto): Todo {
    const todo = this.findOneTodo(id);
    Object.assign(todo, updateTodoDto);
    return todo;
  }

  delete(id: number): { message: string }{
    const index = this.todos.findIndex((td) => td.id === id);
    if (index === -1) {
      throw new NotFoundException('Todo not found');
    }
    this.todos.splice(index, 1);
    return{ message: 'Todo deleted successfully' };
  }
}
