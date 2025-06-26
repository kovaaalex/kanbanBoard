import { KanbanContainer } from './styled';
import type { RootState } from '@/store/store';
import Board from '@/components/Board/index';
import { useAppSelector } from '@/hooks/hooks';
const KanbanBoard = () => {
  const activeBoards = useAppSelector(
    (state: RootState) => state.boards.boards
  );
  return (
    <KanbanContainer>
      {activeBoards.map((state) => (
        <Board key={state.id} item={state} />
      ))}
    </KanbanContainer>
  );
};
export default KanbanBoard;
