import styled from 'styled-components';
export const HeaderComponent = styled.header`
  position: relative;
  padding: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const H2 = styled.h2`
  font-size: 30px;
  line-height: 30px;
`;
export const AddBoardButton = styled.button`
  padding: 10px;
  position: absolute;
  top: 50%;
  right: 8px;
  transform: translateY(-50%);
  display: inline-block;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid #cbd5e1;
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
