export interface TaskOptions {
  hideUntilStart?: boolean
}

export enum TaskStatus {
  Idle,
  Active,
  Completed,
}