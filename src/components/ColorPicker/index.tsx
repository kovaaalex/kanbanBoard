import { boardColors, COLOR_KEYS } from '@/constants/colors';
import type { ColorKey } from '@/types/colorTypes';
import type { ColorPickerProps } from '@/types/IComponents/IColorPicker';

import { ColorItem, ColorsList } from './styled';

export const ColorPicker = ({ onChange }: ColorPickerProps) => {
  const handleChange = (color: ColorKey) => () => {
    onChange(color);
  };
  return (
    <ColorsList>
      {COLOR_KEYS.map((color) => {
        if (!(color in boardColors)) return null;
        const colorData = boardColors[color];
        return (
          <ColorItem
            key={color}
            $colorPick={colorData.textColor}
            onClick={handleChange(color)}
          />
        );
      })}
    </ColorsList>
  );
};
