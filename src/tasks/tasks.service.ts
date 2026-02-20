import { BadRequestException, Injectable } from '@nestjs/common';
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
}
