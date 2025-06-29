import { useCallback } from 'react';

import { boardColors, COLOR_KEYS } from '@/constants/colors';
import type { ColorKey } from '@/types/colorTypes';
import type { ColorPickerProps } from '@/types/IComponents/IColorPicker';

import { ColorItem, ColorsList } from './styled';

export const ColorPicker = ({ onChange }: ColorPickerProps) => {
  const handleChange = useCallback(
    (color: ColorKey) => () => {
      onChange(color);
    },
    [onChange]
  );
  return (
    <ColorsList>
      {COLOR_KEYS.map((color) => (
        <ColorItem
          key={color}
          $colorPick={boardColors[color as keyof typeof boardColors].textColor}
          onClick={handleChange(color)}
        ></ColorItem>
      ))}
    </ColorsList>
  );
};
