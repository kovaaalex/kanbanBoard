import styled from 'styled-components';
export const BoardItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  min-width: 240px;
  max-width: 300px;
  height: auto;
`;
export const Column = styled.div<{
  $status: 'To Do' | 'In Progress' | 'Done' | string;
}>`
  display: flex;
  align-items: center;
  color: white;
  gap: 8px;
  position: relative;
  background-color: ${({ $status }) =>
    $status === 'To Do'
      ? '#4f46e5'
      : $status === 'In Progress'
        ? '#F59E0B'
        : $status === 'Done'
          ? '#22C55E'
          : '#DC2626'};
  border-radius: 100px;
  padding: 8px;
`;
export const H4 = styled.input`
  width: 150px;
  background: none;
  border: none;
  outline: none;
  color: white;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
`;
export const Plus = styled.span`
  position: absolute;
  top: 50%;
  right: 8px;
  transform: translateY(-50%);
  display: inline-block;
  width: 20px;
  height: 20px;
  color: white;
  cursor: pointer;
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
export const TaskLength = styled.span<{
  $status: 'To Do' | 'In Progress' | 'Done' | string;
}>`
  display: inline-block;
  padding: 6px 12px;
  border-radius: 50%;
  background-color: white;
  color: ${({ $status }) =>
    $status === 'To Do'
      ? '#4F46E5'
      : $status === 'In Progress'
        ? '#F59E0B'
        : $status === 'Done'
          ? '#22C55E'
          : '#DC2626'};
  font-size: 14px;
  line-height: 20px;
`;
export const AddTask = styled.div`
  border-radius: 24px;
  padding: 12px;
  border: 1px solid #e2e8f0;
  box-shadow: 0px 2px 4px -2px rgba(23, 23, 23, 0.06);
`;
export const AddTaskButton = styled.button<{
  $status: 'To Do' | 'In Progress' | 'Done' | string;
}>`
  font-size: 12px;
  line-height: 16px;
  background-color: ${({ $status }) =>
    $status === 'To Do'
      ? '#EEF2FF'
      : $status === 'In Progress'
        ? '#FFFBEB'
        : $status === 'Done'
          ? '#F0FDF4'
          : '#FEE2E2'};
  color: ${({ $status }) =>
    $status === 'To Do'
      ? '#4F46E5'
      : $status === 'In Progress'
        ? '#F59E0B'
        : $status === 'Done'
          ? '#22C55E'
          : '#DC2626'};
  padding: 4px 8px;
  border: none;
`;
