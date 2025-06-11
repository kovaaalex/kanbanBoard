import Board from '../Board/Index';
import { KanbanContainer } from './styled';
const KanbanBoard = () => {
  type TaskState = 'To Do' | 'In Progress' | 'Done';
  const columnData: Record<TaskState, number> = {
    'To Do': 4,
    'In Progress': 3,
    Done: 3,
  };
  return (
    <KanbanContainer>
      {(Object.keys(columnData) as TaskState[]).map((state) => (
        <Board key={state} title={state} taskCount={columnData[state]} />
      ))}
    </KanbanContainer>
  );
};
export default KanbanBoard;
