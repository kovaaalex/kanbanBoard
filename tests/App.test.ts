import { generateBoardName } from '../src/utils/generateBoardName';
import { getColorStyles } from '../src/utils/getColorStyles';
import { isDeadlinePassed } from '../src/utils/isDeadlinePassed';

describe('Color Styles', function () {
  it('Should return correct styles for known colors', () => {
    expect(getColorStyles('blue')).toEqual({
      textColor: '#4F46E5',
      bgColor: '#EEF2FF',
    });
    expect(getColorStyles('orange')).toEqual({
      textColor: '#F59E0B',
      bgColor: '#FFFBEB',
    });
    expect(getColorStyles('green')).toEqual({
      textColor: '#22C55E',
      bgColor: '#F0FDF4',
    });
    expect(getColorStyles('red')).toEqual({
      textColor: '#DC2626',
      bgColor: '#FEE2E2',
    });
    expect(getColorStyles('purple')).toEqual({
      textColor: '#9D50BB',
      bgColor: '#DC52F9',
    });
    expect(getColorStyles('yellow')).toEqual({
      textColor: '#FF7F50',
      bgColor: '#EEFABD',
    });
  });
});
describe('BoardName', function () {
  it('Should return board name', () => {
    expect(generateBoardName(5)).toBe('Board5');
    expect(generateBoardName(7)).toBe('Board7');
    expect(generateBoardName(4)).toBe('Board4');
  });
});
describe('Is deadline passed', () => {
  beforeAll(() => {
    jest.useFakeTimers().setSystemTime(new Date('2025-06-30T00:00:00Z'));
  });
  afterAll(() => {
    jest.useRealTimers();
  });
  it('Should return true', () => {
    expect(isDeadlinePassed(new Date('2025-06-28T00:00:00Z'))).toBe(true);
    expect(isDeadlinePassed(new Date('2025-06-29T23:59:59Z'))).toBe(true);
  });
  it('Should return false', () => {
    expect(isDeadlinePassed(new Date('2025-07-01T00:00:00Z'))).toBe(false);
    expect(isDeadlinePassed(new Date('2026-01-01T00:00:00Z'))).toBe(false);
    expect(isDeadlinePassed(null)).toBe(false);
  });
});
