import { useDispatch } from 'react-redux';
import { AddBoardButton, H2, HeaderComponent } from './styled';
import { addCustomBoard } from '@/store/boardsSlice';

const Header = () => {
  const dispatch = useDispatch();
  const handleAddBoard = () => {
    const defaultName = `New Board ${Math.floor(Math.random() * 1000)}`;
    dispatch(addCustomBoard(defaultName));
  };
  return (
    <HeaderComponent>
      <H2>Kanban Dashboard</H2>
      <AddBoardButton onClick={handleAddBoard}></AddBoardButton>
    </HeaderComponent>
  );
};
export default Header;
