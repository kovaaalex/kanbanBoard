import styled from 'styled-components';
export const KanbanContainer = styled.div`
  width: 100%;
  display: flex;
  overflow-x: auto;
  justify-content: space-evenly;
  gap: 16px;
  padding-bottom: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;
