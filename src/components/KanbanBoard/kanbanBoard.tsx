import { useSelector } from 'react-redux';
import { KanbanContainer } from './styled';
import type { RootState } from '@/store/store';
import Board from '@/components/Board/Index';
const KanbanBoard = () => {
  const activeBoards = useSelector((state: RootState) => state.boards.boards);
  return (
    <KanbanContainer>
      {activeBoards.map((state) => (
        <Board key={state.id} item={state} />
      ))}
    </KanbanContainer>
  );
};
export default KanbanBoard;
