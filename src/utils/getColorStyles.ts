import { boardColors } from '@/constants/colors';
import type { ColorKey } from '@/types/colorTypes';

export const getColorStyles = (color: ColorKey) => {
  return boardColors[color];
};
