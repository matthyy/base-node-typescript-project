import { describe, test, expect } from 'vitest';

import { add, multiply, isEven } from './utils.js';

describe('Math utilities', () => {
    test('add should return sum of two numbers', () => {
        expect(add(2, 3)).toBe(5);
        expect(add(-1, 1)).toBe(0);
        expect(add(0, 0)).toBe(0);
    });

    test('multiply should return product of two numbers', () => {
        expect(multiply(3, 4)).toBe(12);
        expect(multiply(-2, 5)).toBe(-10);
        expect(multiply(0, 10)).toBe(0);
    });

    test('isEven should return true for even numbers', () => {
        expect(isEven(2)).toBe(true);
        expect(isEven(4)).toBe(true);
        expect(isEven(0)).toBe(true);
    });

    test('isEven should return false for odd numbers', () => {
        expect(isEven(1)).toBe(false);
        expect(isEven(3)).toBe(false);
        expect(isEven(-1)).toBe(false);
    });
});
