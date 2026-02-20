import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
import { v4 as uuid } from 'uuid';
 
@Injectable()
export class TasksService {
    private tasks: Task[] = [];

    public getAllTasks(): Task[]
    {
        return this.tasks;
    }
    
    public createTask(title:string, description:string): Task
    {
        if(!title || !description)
        {
            throw new BadRequestException('You need to write something');
        }
        const task: Task = {
            id: uuid(),
            title: title,
            description: description,
            status : TaskStatus.OPEN,
        }
        this.tasks.push(task);
        return task;
    }

    public getTaskById(id:string) : Task
    {
        const task = this.tasks.find(task => task.id === id);
        if(!task){
            throw new NotFoundException('No Task Found');
        }
        return task;
    }

    public deleteTask(id:string) : void
    {
        this.tasks = this.tasks.filter(task => task.id !== id);
    }

    public updateTaskStatus(id:string,status: TaskStatus) :Task
    {
        const task = this.tasks.find(task=> task.id === id);
        if(!task){
            throw new NotFoundException('Task Not Found');
        }
        task.status = status;
        return task;
    }
}
