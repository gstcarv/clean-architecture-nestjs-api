import { ValidationError } from 'src/application/errors/ValidationError';
import { NumberValidator } from '../number-validator';
import { ObjectIdValidator } from '../object-id-validator';

describe('Object id validator', () => {
    test('It should return true if passed on validation', () => {
        expect(
            new ObjectIdValidator('foo', '62f1bd09a8e4c00e5d95d1a5').validate(),
        ).toBe(true);
    });

    test('It should return ValidationError if validation fails', () => {
        expect(
            new ObjectIdValidator('bar', 'fail_validation').validate(),
        ).toBeInstanceOf(ValidationError);
    });
});
