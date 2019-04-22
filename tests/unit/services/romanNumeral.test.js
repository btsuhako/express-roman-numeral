const { convertInt } = require('../../../src/services/romanNumeral');

describe('romanNumeral service unit tests', () => {
  describe('convertInt()', () => {
    test('convertInt(1)', () => {
      expect(convertInt(1)).toBe('I');
    });
    test('convertInt(2)', () => {
      expect(convertInt(2)).toBe('II');
    });
    test('convertInt(3)', () => {
      expect(convertInt(3)).toBe('III');
    });
    test('convertInt(4)', () => {
      expect(convertInt(4)).toBe('IV');
    });
    test('convertInt(5)', () => {
      expect(convertInt(5)).toBe('V');
    });
    test('convertInt(6)', () => {
      expect(convertInt(6)).toBe('VI');
    });
    test('convertInt(7)', () => {
      expect(convertInt(7)).toBe('VII');
    });
    test('convertInt(8)', () => {
      expect(convertInt(8)).toBe('VIII');
    });
    test('convertInt(9)', () => {
      expect(convertInt(9)).toBe('IX');
    });
    test('convertInt(10)', () => {
      expect(convertInt(10)).toBe('X');
    });
    test('convertInt(11)', () => {
      expect(convertInt(11)).toBe('XI');
    });
    test('convertInt(12)', () => {
      expect(convertInt(12)).toBe('XII');
    });
    test('convertInt(13)', () => {
      expect(convertInt(13)).toBe('XIII');
    });
    test('convertInt(14)', () => {
      expect(convertInt(14)).toBe('XIV');
    });
    test('convertInt(15)', () => {
      expect(convertInt(15)).toBe('XV');
    });
    test('convertInt(16)', () => {
      expect(convertInt(16)).toBe('XVI');
    });
    test('convertInt(17)', () => {
      expect(convertInt(17)).toBe('XVII');
    });
    test('convertInt(18)', () => {
      expect(convertInt(18)).toBe('XVIII');
    });
    test('convertInt(19)', () => {
      expect(convertInt(19)).toBe('XIX');
    });
    test('convertInt(20)', () => {
      expect(convertInt(20)).toBe('XX');
    });
    test('convertInt(251)', () => {
      expect(convertInt(251)).toBe('CCLI');
    });
    test('convertInt(252)', () => {
      expect(convertInt(252)).toBe('CCLII');
    });
    test('convertInt(253)', () => {
      expect(convertInt(253)).toBe('CCLIII');
    });
    test('convertInt(254)', () => {
      expect(convertInt(254)).toBe('CCLIV');
    });
    test('convertInt(255)', () => {
      expect(convertInt(255)).toBe('CCLV');
    });
    test('convertInt(aa)', () => {
      expect(convertInt('aa')).toBe('');
    });
  });
});
