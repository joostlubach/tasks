import { Task } from './Task'
import { TaskOptions } from './types'

export class Console {

  private tasks: Task[] = []

  public task(title: string, options: TaskOptions = {}): Task {
    const task = new Task(title, options)
    this.tasks.push(task)
    return task
  }

}