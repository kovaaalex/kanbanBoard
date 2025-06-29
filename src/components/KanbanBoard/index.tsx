import { useAppSelector } from '@/hooks/hooks';

import Board from '@/components/Board/index';
import type { RootState } from '@/store/store';

import { KanbanContainer } from './styled';

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
