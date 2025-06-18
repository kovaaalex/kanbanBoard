import styled from 'styled-components';
export const ColorsList = styled.ul`
  position: absolute;
  background-color: #d9d9d9;
  z-index: 10;
  top: 100%;
  right: 0;
  padding: 15px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;
export const ColorItem = styled.li<{ $colorPick?: string }>`
  list-style-type: none;
  width: 15px;
  height: 15px;
  background-color: ${(props) => props.$colorPick};
  border-radius: 50%;
  cursor: pointer;
`;
