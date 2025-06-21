import { useDispatch, useSelector } from 'react-redux';
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
import type { RootState } from '@/store/store';
import { generateBoardName } from '@/utils/generateBoardName';

const Header = () => {
  const dispatch = useDispatch();
  const boards = useSelector((state: RootState) => state.boards);
  const [isOpen, setOpen] = useState(false);
  const handleAddBoard = () => {
    const defaultName = generateBoardName(boards.lastId);
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
