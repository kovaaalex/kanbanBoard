export const boardColors = {
  '#4F46E5': '#EEF2FF',
  '#F59E0B': '#FFFBEB',
  '#22C55E': '#F0FDF4',
  '#DC2626': '#FEE2E2',
  '#9D50BB': '#6A0DAD',
  '#FF7F50': '#FFA62E',
};
export function getBackgroundColor(color?: string): string {
  if (!color) return '#FEE2E2';
  return boardColors[color as keyof typeof boardColors] || color;
}
