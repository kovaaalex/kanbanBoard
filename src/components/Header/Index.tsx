import { useDispatch } from 'react-redux';
import {
  AddBoardButton,
  H2,
  HamburgerContainer,
  HeaderComponent,
  HeaderWrapper,
} from './styled';
import { addCustomBoard } from '@/store/boardsSlice';
import Hamburger from 'hamburger-react';
import { useState } from 'react';

const Header = () => {
  const dispatch = useDispatch();
  const [isOpen, setOpen] = useState(false);
  const handleAddBoard = () => {
    const defaultName = `New Board ${Math.floor(Math.random() * 1000)}`;
    dispatch(addCustomBoard(defaultName));
  };
  return (
    <HeaderComponent>
      <HamburgerContainer>
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </HamburgerContainer>
      <HeaderWrapper $isWrapperOpen={isOpen === true}>
        <H2>Kanban Dashboard</H2>
        <AddBoardButton onClick={handleAddBoard}></AddBoardButton>
      </HeaderWrapper>
    </HeaderComponent>
  );
};
export default Header;
