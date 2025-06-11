import styled from 'styled-components';
export const BoardItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
export const Column = styled.div`
  display: flex;
  align-items: center;
  color: white;
  gap: 8px;
  position: relative;
  background-color: #4f46e5;
  border-radius: 100px;
  padding: 8px;
`;
export const H4 = styled.h4`
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
`;
export const Plus = styled.span`
  position: absolute;
  top: 50%;
  right: 8px;
  transform: translateY(-50%); /* Добавил для точного центрирования */
  display: inline-block;
  width: 20px;
  height: 20px;
  color: white;

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
    width: 18px; /* Уменьшил для лучшего вида */
    height: 2px;
  }

  &::after {
    width: 2px;
    height: 18px; /* Уменьшил для лучшего вида */
  }
`;
export const TaskLength = styled.span`
  display: inline-block;
  padding: 6px 12px;
  border-radius: 50%;
  background-color: white;
  color: #4f46e5;
  font-size: 14px;
  line-height: 20px;
`;
export const AddTask = styled.div`
  border-radius: 24px;
  padding: 12px;
  border: 1px solid #e2e8f0;
  box-shadow: 0px 2px 4px -2px rgba(23, 23, 23, 0.06);
`;
export const AddTaskButton = styled.button`
  font-size: 12px;
  line-height: 16px;
  background-color: #eef2ff;
  color: #4f46e5;
  padding: 4px 8px;
  border: none;
`;
