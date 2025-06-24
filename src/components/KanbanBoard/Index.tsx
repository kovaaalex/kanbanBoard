import { useSelector } from 'react-redux';
import Board from '@/components/Board/index';
import { KanbanContainer } from './styled';
import type { RootState } from '@/store/store';
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
