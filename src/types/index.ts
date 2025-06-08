export interface Todo {
  id: string;
  title: string;
  category: string;
  dueDate?: Date;
  completed: boolean;
  createdAt: Date;
  notified: boolean;
  completedAt?: Date;
}