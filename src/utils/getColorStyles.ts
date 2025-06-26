export const boardColors = {
  blue: {
    textColor: '#4F46E5',
    bgColor: '#EEF2FF',
  },
  orange: {
    textColor: '#F59E0B',
    bgColor: '#FFFBEB',
  },
  green: {
    textColor: '#22C55E',
    bgColor: '#F0FDF4',
  },
  red: {
    textColor: '#DC2626',
    bgColor: '#FEE2E2',
  },
  purple: {
    textColor: '#9D50BB',
    bgColor: '#DC52F9',
  },
  yellow: {
    textColor: '#FF7F50',
    bgColor: '#EEFABD',
  },
} as const;
export type ColorKey = keyof typeof boardColors;
export const getColorStyles = (color: ColorKey) => {
  return boardColors[color];
};
