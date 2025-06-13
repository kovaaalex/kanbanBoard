import Board from '../Board/Index';
import { KanbanContainer } from './styled';
const KanbanBoard = () => {
  type TaskState = 'To Do' | 'In Progress' | 'Done';
  return (
    <KanbanContainer>
      {(['To Do', 'In Progress', 'Done'] as TaskState[]).map((state) => (
        <Board key={state} title={state} />
      ))}
    </KanbanContainer>
  );
};
export default KanbanBoard;
