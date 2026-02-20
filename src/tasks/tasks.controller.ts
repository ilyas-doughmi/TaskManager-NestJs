import { Body, Controller, Get , Param, Post, Delete, Patch } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TaskStatus } from './task.model';

@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService) {}
    @Get() 
    getTasks()
    {
        return this.tasksService.getAllTasks();
    }

    @Post()
    createTask(
        @Body('title') title:string,
        @Body('description') description: string
    ){
        return this.tasksService.createTask(title,description);
    }

    @Get('/:id')
    getTaskById(
        @Param('id') id:string,
    ){
        return this.tasksService.getTaskById(id);
    }
    
    @Delete('/:id')
    deleteTask(
        @Param('id') id:string,
    ){
        this.tasksService.deleteTask(id);
    }

    @Patch('/:id/status')
    editTask(
        @Param('id') id:string,
        @Body('status') status: TaskStatus
    ){
        return this.tasksService.updateTaskStatus(id,status);
    }

}
