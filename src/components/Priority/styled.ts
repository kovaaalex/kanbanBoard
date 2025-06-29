import styled from 'styled-components';

export const PriorityContainer = styled.p<{
  $priority?: 'Low' | 'High' | 'Medium' | 'Priority';
}>`
  position: relative;
  padding: 4px 8px;
  font-size: 16px;
  line-height: 22px;
  color: ${({ $priority }) =>
    $priority === 'High'
      ? '#F43F5E'
      : $priority === 'Medium'
        ? '#4F46E5'
        : $priority === 'Low'
          ? '#22C55E'
          : '#000'};
  background-color: ${({ $priority }) =>
    $priority === 'High'
      ? '#FFF1F2'
      : $priority === 'Medium'
        ? '#EEF2FF'
        : $priority === 'Low'
          ? '#F0FDF4'
          : '#EEF2FF'};
  border-radius: 1234px;
  display: inline-block;
  cursor: pointer;
`;
export const PriorityList = styled.ul<{ $isOpen?: true | false }>`
  position: absolute;
  z-index: 2;
  top: 24px;
  background-color: white;
  list-style-type: none;
`;
export const PriorityItem = styled.li<{
  $priority?: 'Low' | 'Medium' | 'High' | 'Priority';
}>`
  padding: 8px 12px;
  font-size: 14px;
  color: ${({ $priority }) =>
    $priority === 'High'
      ? '#F43F5E'
      : $priority === 'Medium'
        ? '#4F46E5'
        : $priority === 'Low'
          ? '#22C55E'
          : '#64748B'};
  cursor: pointer;
  border-radius: 4px;
  background-color: ${({ $priority }) =>
    $priority === 'High'
      ? '#FFF1F2'
      : $priority === 'Medium'
        ? '#EEF2FF'
        : $priority === 'Low'
          ? '#F0FDF4'
          : '#F8FAFC'};
`;
