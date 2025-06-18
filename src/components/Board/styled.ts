import { getBackgroundColor } from '@/utils/getBackgroundColor';
import styled from 'styled-components';
export const boardColors = {
  '#4F46E5': '#EEF2FF',
  '#F59E0B': '#FFFBEB',
  '#22C55E': '#F0FDF4',
  '#DC2626': '#FEE2E2',
};
export const BoardItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  min-width: 300px;
  height: auto;
`;
export const AddTask = styled.div`
  border-radius: 24px;
  padding: 12px;
  border: 1px solid #e2e8f0;
  box-shadow: 0px 2px 4px -2px rgba(23, 23, 23, 0.06);
`;
export const AddTaskButton = styled.button<{
  $statusColor?: string;
}>`
  font-size: 12px;
  line-height: 16px;
  background-color: ${(props) => getBackgroundColor(props.$statusColor)};
  color: ${(props) => props.$statusColor || '#FEE2E2'};
  padding: 4px 8px;
  border: none;
`;
