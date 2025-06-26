import {
  AddBoardButton,
  H2,
  HamburgerContainer,
  HeaderComponent,
  HeaderWrapper,
} from './styled';
import { addCustomBoard } from '@/store/slices/boardsSlice';
import Hamburger from 'hamburger-react';
import { useState } from 'react';
import type { RootState } from '@/store/store';
import { generateBoardName } from '@/utils/generateBoardName';
import { initializeBoardTasks } from '@/store/slices/taskSlice';
import { useAppDispatch, useAppSelector } from '@/hooks/hooks';

const Header = () => {
  const dispatch = useAppDispatch();
  const boards = useAppSelector((state: RootState) => state.boards);
  const [isOpen, setOpen] = useState(false);
  const handleAddBoard = () => {
    const defaultName = generateBoardName(boards.lastId);
    dispatch(addCustomBoard(defaultName));
    dispatch(initializeBoardTasks(defaultName));
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
