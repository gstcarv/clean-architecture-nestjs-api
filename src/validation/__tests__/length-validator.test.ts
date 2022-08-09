import { ValidationError } from 'src/application/errors/ValidationError';
import { LengthValidator } from '../length-validator';
import { NumberValidator } from '../number-validator';

describe('Length validator', () => {
    test('It should return true if passed on validation', () => {
        expect(
            new LengthValidator('foo', 'my-text', {
                min: 0,
                max: 20,
            }).validate(),
        ).toBe(true);

        expect(
            new LengthValidator('foo', 'other-text', {
                min: 5,
                max: 12,
            }).validate(),
        ).toBe(true);
    });

    test('It should return ValidationError if validation fails', () => {
        expect(
            new LengthValidator('bar', 'small', { min: 9, max: 20 }).validate(),
        ).toBeInstanceOf(ValidationError);

        expect(
            new LengthValidator('bar', 'my_mock_big_text', {
                min: 1,
                max: 2,
            }).validate(),
        ).toBeInstanceOf(ValidationError);
    });
});
