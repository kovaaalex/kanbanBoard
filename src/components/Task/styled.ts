import styled from 'styled-components';
interface TaskSectionProps {
  $isOverdue?: boolean;
}
export const TaskSection = styled.section<TaskSectionProps>`
  position: relative;
  padding: 12px;
  border-radius: 24px;
  border: 1px solid ${(props) => (props.$isOverdue ? '#ff4d4f' : '#e2e8f0')};
  max-width: 300px;
  background-color: #fff;
  cursor: grab;
`;
export const TaskTitle = styled.textarea`
  margin: 12px 0 8px 0;
  font-family: inherit;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  color: #1e293b;
  width: 100%;
  border: none;
  outline: none;
  resize: none;
  overflow-y: hidden;
  min-height: 22px;
`;
export const TaskDescription = styled.textarea`
  font-family: inherit;
  font-size: 16px;
  line-height: 160%;
  line-height: 22px;
  color: #475569;
  width: 100%;
  border: none;
  outline: none;
  resize: none;
  overflow-y: hidden;
  min-height: 22px;
`;
export const DeleteButton = styled.button`
  padding: 0;
  position: absolute;
  top: 10px;
  right: 10px;
`;
export const SaveButton = styled.button`
  border: none;
  background: none;
  padding: 0;
  margin-top: 16px;
  color: #475569;
`;
export const DateInput = styled.input`
  position: absolute;
  top: 12px;
  right: 30px;
  border: none;
  color: white;
  &::-webkit-datetime-edit {
    display: none;
  }
`;
export const DateOutput = styled.p`
  color: #475569;
`;
