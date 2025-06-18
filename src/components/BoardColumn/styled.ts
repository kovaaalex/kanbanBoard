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
  min-width: 240px;
  max-width: 300px;
  height: auto;
`;
export const Column = styled.div<{
  $statusColor?: string;
}>`
  display: flex;
  align-items: center;
  color: white;
  gap: 8px;
  position: relative;
  background-color: ${(props) => props.$statusColor || '#FEE2E2'};
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
  $statusColor?: string;
}>`
  display: inline-block;
  padding: 6px 12px;
  border-radius: 50%;
  background-color: white;
  color: ${(props) => props.$statusColor || '#FEE2E2'};
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
  $statusColor?: string;
}>`
  font-size: 12px;
  line-height: 16px;
  background-color: ${(props) => getBackgroundColor(props.$statusColor)};
  color: ${(props) => props.$statusColor || '#FEE2E2'};
  padding: 4px 8px;
  border: none;
`;
export const SaveButton = styled.button`
  position: absolute;
  top: 12px;
  right: 8px;
  border: none;
  background: none;
  padding: 0;
  color: white;
`;
export const DeleteButton = styled.button`
  padding: 0;
  position: absolute;
  top: 14px;
  right: 45px;
  background: none;
  color: white;
`;
