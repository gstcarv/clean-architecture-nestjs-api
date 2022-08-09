import { ValidationError } from 'src/application/errors/ValidationError';
import { NumberValidator } from '../number-validator';

describe('Number validator', () => {
    test('It should return true if passed on validation', () => {
        expect(
            new NumberValidator('foo', 2, { min: 0, max: 20 }).validate(),
        ).toBe(true);

        expect(
            new NumberValidator('foo', 233, { min: 30, max: 300 }).validate(),
        ).toBe(true);

        expect(
            new NumberValidator('foo', 12, { min: 12, max: 20 }).validate(),
        ).toBe(true);

        expect(
            new NumberValidator('foo', 56, { min: 30, max: 60 }).validate(),
        ).toBe(true);
    });

    test('It should return ValidationError if validation fails', () => {
        expect(
            new NumberValidator('bar', -1, { min: 0, max: 20 }).validate(),
        ).toBeInstanceOf(ValidationError);

        expect(
            new NumberValidator('bar', 301, { min: 30, max: 300 }).validate(),
        ).toBeInstanceOf(ValidationError);

        expect(
            new NumberValidator('bar', 10, { min: 12, max: 20 }).validate(),
        ).toBeInstanceOf(ValidationError);

        expect(
            new NumberValidator('bar', 50, { min: 50, max: 30 }).validate(),
        ).toBeInstanceOf(ValidationError);
    });
});
