import type { ColorKey } from '../colorTypes';

export interface ColorPickerProps {
  onChange: (color: ColorKey) => void;
}
