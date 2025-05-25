import { TaskOptions, TaskStatus } from './types'

export class Task {

  constructor(
    public title: string,
    private readonly options: TaskOptions = {}
  ) {}

  public status: TaskStatus = TaskStatus.Idle
  public error: Error | null = null

  public get isIdle() { return this.status === TaskStatus.Idle }
  public get isActive() { return this.status === TaskStatus.Active }
  public get isCompleted() { return this.status === TaskStatus.Completed }
  public get isSucceeded() { return this.isCompleted && this.error === null }
  public get isFailed() { return this.isCompleted && this.error !== null }

  // #region Items

  public update(title: string) {
    this.title = title
  }

  public item(text: string) {

  }

  public start(title?: string) {
    if (title != null) {
      this.title = title
    }
    this.status = TaskStatus.Active
  }

  // #endregion

  // #region Completion

  public complete(title?: string, error: Error | null = null) {
    if (title != null) {
      this.title = title
    }
    this.status = TaskStatus.Completed
    this.error = error
  }

  public fail(title?: string, error: Error | null = null) {
    this.complete(title, error)
  }

  public success(title?: string) {
    this.complete(title, null)
  }

  // #endregion

  // #region Child tasks

  public add(title: string, options: TaskOptions = {}): Task {
    const task = new Task(title, options)
    // Here you would typically add the task to a collection or handle it in some way
    return task
  }

  // #endregion

}
