import { useCallback } from 'react';
import { ColorItem, ColorsList } from './styled';
interface ColorPickerProps {
  onChange: (color: string) => void;
}
export const ColorPicker = ({ onChange }: ColorPickerProps) => {
  const colors: string[] = [
    '#4F46E5',
    '#F59E0B',
    '#22C55E',
    '#DC2626',
    '#9D50BB',
    '#FF7F50',
  ];
  const handleChange = useCallback(
    (color: string) => () => {
      onChange(color);
    },
    [onChange]
  );
  return (
    <ColorsList>
      {colors.map((color) => (
        <ColorItem
          key={color}
          $colorPick={color}
          onClick={handleChange(color)}
        ></ColorItem>
      ))}
    </ColorsList>
  );
};
