import styled from 'styled-components';

export const HeaderComponent = styled.header`
  position: relative;
  padding: 32px;
  display: flex;
  align-items: center;
`;
export const HamburgerContainer = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: flex;
  }
`;
export const H2 = styled.h2`
  font-size: 30px;
  line-height: 30px;
  @media (max-width: 768px) {
    font-size: 24px;
  }
`;
export const AddBoardButton = styled.button`
  padding: 10px;
  position: relative;
  display: inline-block;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid #cbd5e1;
  background-color: white;
  color: #475569;
  &::before,
  &::after {
    content: '';
    position: absolute;
    background-color: currentColor;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  &::before {
    width: 18px;
    height: 2px;
  }
  &::after {
    width: 2px;
    height: 18px;
  }
`;
export const HeaderWrapper = styled.div<{ $isWrapperOpen: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  @media (max-width: 768px) {
    display: ${({ $isWrapperOpen }) => ($isWrapperOpen ? 'flex' : 'none')};
  }
`;
