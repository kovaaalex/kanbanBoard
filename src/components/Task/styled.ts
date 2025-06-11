import styled from 'styled-components';

export const TaskSection = styled.section`
  padding: 12px;
  border-radius: 24px;
  border: 1px solid #e2e8f0;
  max-width: 300px;
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
