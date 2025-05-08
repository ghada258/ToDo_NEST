import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    Put,
    Delete,
    ParseIntPipe,
  } from '@nestjs/common';
  import { TodoService } from './ToDo_Service';
  import { CreateTodoDto } from './Create-ToDo.dto';
  import { UpdateTodoDto } from './Update-ToDo.dto';
  import { Todo } from './ToDo_Interface';
  
  @Controller('todos')
  export class TodoController {
    constructor(private readonly todoService: TodoService) {}
  
    @Get()
    findAllTodo(): Todo[] {
      return this.todoService.findAllTodo();
    }
  
    @Get(':id')
    findOneTodo(@Param('id', ParseIntPipe) id: number): Todo {
      return this.todoService.findOneTodo(id);
    }
  
    @Post()
    create(@Body() createTodoDto: CreateTodoDto): Todo {
      return this.todoService.create(createTodoDto);
    }
  
    @Put(':id')
    update(
      @Param('id', ParseIntPipe) id: number,
      @Body() updateTodoDto: UpdateTodoDto,
    ): Todo {
      return this.todoService.update(id, updateTodoDto);
    }
  
    @Delete(':id')
    delete(@Param('id', ParseIntPipe) id: number):{ message: string }  {
     return this.todoService.delete(id);
    }
  }
  