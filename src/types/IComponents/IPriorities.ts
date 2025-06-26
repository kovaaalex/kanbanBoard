export type Priorities = 'Low' | 'Medium' | 'High' | 'Priority';
export interface IPriority {
  priority?: Priorities;
  onChange?: (priority: Priorities) => void;
}
