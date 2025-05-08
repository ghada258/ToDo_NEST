import { Module } from '@nestjs/common';
import { TodoController } from './ToDo_Controller';
import { TodoService } from './ToDo_Service';

@Module({
  imports: [],
  controllers: [TodoController],
  providers: [TodoService],
})
export class TodoModule {}
