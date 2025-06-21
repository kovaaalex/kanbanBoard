import { getBackgroundColor } from '../src/utils/getBackgroundColor';
import { generateBoardName } from '../src/utils/generateBoardName';
describe('Color', function () {
  it('Should return correct background', () => {
    expect(getBackgroundColor('#4F46E5')).toBe('#EEF2FF');
    expect(getBackgroundColor('#F59E0B')).toBe('#FFFBEB');
    expect(getBackgroundColor('#22C55E')).toBe('#F0FDF4');
    expect(getBackgroundColor('#DC2626')).toBe('#FEE2E2');
    expect(getBackgroundColor('#9D50BB')).toBe('#DC52F9');
    expect(getBackgroundColor('#FF7F50')).toBe('#EEFABD');
  });
  it('Should handle unknown colors', () => {
    expect(getBackgroundColor('blue')).toBe('blue');
    expect(getBackgroundColor('#123456')).toBe('#123456');
  });
  it('Should return default for undefined/null', () => {
    expect(getBackgroundColor()).toBe('#FEE2E2');
  });
});
describe('BoardName', function () {
  it('Should return board name', () => {
    expect(generateBoardName(5)).toBe('Board5');
    expect(generateBoardName(7)).toBe('Board7');
    expect(generateBoardName(4)).toBe('Board4');
  });
});
