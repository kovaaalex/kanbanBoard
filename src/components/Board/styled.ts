import styled from 'styled-components';

export const BoardItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  min-width: 300px;
  height: auto;
`;
export const AddTask = styled.div`
  background-color: white;
  border-radius: 24px;
  padding: 12px;
  border: 1px solid #e2e8f0;
  box-shadow: 0px 2px 4px -2px rgba(23, 23, 23, 0.06);
`;
export const AddTaskButton = styled.button<{
  $statusColor?: { bgColor: string; textColor: string };
}>`
  font-size: 12px;
  line-height: 16px;
  background-color: ${(props) => props.$statusColor?.bgColor};
  color: ${(props) => props.$statusColor?.textColor || '#FEE2E2'};
  padding: 4px 8px;
  border: none;
`;
