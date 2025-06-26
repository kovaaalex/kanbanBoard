import { useCallback } from 'react';
import { ColorItem, ColorsList } from './styled';
import type { ColorKey } from '@/types/colorTypes';
import { boardColors, COLOR_KEYS } from '@/constants/colors';
import type { ColorPickerProps } from '@/types/IComponents/IColorPicker';

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
