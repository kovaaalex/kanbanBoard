import { useSelector } from 'react-redux';
import Board from '@/components/Board/Index';
import { KanbanContainer } from './styled';
import type { RootState } from '@/store/store';
const KanbanBoard = () => {
  const activeBoards = useSelector((state: RootState) => state.boards.boards);
  return (
    <KanbanContainer>
      {activeBoards.map((state) => (
        <Board key={state.id} title={state.name} />
      ))}
    </KanbanContainer>
  );
};
export default KanbanBoard;
