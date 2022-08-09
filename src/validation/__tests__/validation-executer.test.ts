import { ValidationError } from 'src/application/errors/ValidationError';
import { LengthValidator } from '../length-validator';
import { NumberValidator } from '../number-validator';
import { ValidationExecuter } from '../validation-executer';

describe('Validation Executer', () => {
    test('It should validate a set of validations', () => {
        const mockDataToValidate = {
            foo: 'bar',
            bar: 2,
        };

        const executer = new ValidationExecuter([
            new NumberValidator('bar', mockDataToValidate.bar, {
                min: 0,
                max: 2,
            }),
        ]);

        expect(executer.perform()).toBeTruthy();
    });

    test('It should return the first found validation error', () => {
        const mockDataToValidate = {
            foo: 'bar',
            bar: 5,
        };

        const executer = new ValidationExecuter([
            new LengthValidator('foo', mockDataToValidate.foo, {
                min: 0,
                max: 2,
            }),
            new NumberValidator('bar', mockDataToValidate.bar, {
                min: 0,
                max: 2,
            }),
        ]);

        expect(executer.perform()).toBeInstanceOf(ValidationError);
    });
});
