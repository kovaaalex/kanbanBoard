import styled from 'styled-components';
export const ColorsList = styled.ul`
  position: absolute;
  background-color: white;
  border-radius: 24px;
  z-index: 20;
  top: 100%;
  right: 0;
  padding: 15px;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 2px 4px -2px rgba(23, 23, 23, 0.06);
`;
export const ColorItem = styled.li<{ $colorPick?: string }>`
  list-style-type: none;
  width: 15px;
  height: 15px;
  background-color: ${(props) => props.$colorPick};
  border-radius: 50%;
  cursor: pointer;
`;
