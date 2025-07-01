import styled from 'styled-components';

export const DroppableBoardComponent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  background-color: ${(props) => props.theme.colors.boardBg};
  padding: 12px;
  border-radius: 32px;
`;
