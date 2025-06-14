import { useSelector } from 'react-redux';
import Board from '../Board/Index';
import { KanbanContainer } from './styled';
import type { RootState } from '../../store/store';
const KanbanBoard = () => {
  const activeBoards = useSelector(
    (state: RootState) => state.boards.activeBoards
  );
  return (
    <KanbanContainer>
      {activeBoards.map((state) => (
        <Board key={state} title={state} />
      ))}
    </KanbanContainer>
  );
};
export default KanbanBoard;
