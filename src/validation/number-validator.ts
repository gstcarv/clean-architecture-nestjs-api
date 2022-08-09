import { ValidationError } from 'src/application/errors/ValidationError';
import { Validation } from 'src/application/protocols/validation';

export class NumberValidator extends Validation<NumberValidator.Options> {
    constructor(
        private readonly field: string,
        private readonly input: NumberValidator.InputType,
        private readonly options: NumberValidator.Options,
    ) {
        super(field, input, options);
    }

    validate(): true | ValidationError {
        const { min, max } = this.options;

        const validationError = new ValidationError(
            NumberValidator.name,
            `Field "${this.field}" must be a valid number between ${min} and ${max}`,
        );

        if (typeof this.input !== 'number') {
            return validationError;
        }

        if (this.input < min || this.input > max) {
            return validationError;
        }

        return true;
    }
}

namespace NumberValidator {
    export type InputType = number;

    export type Options = {
        min: number;
        max: number;
    };
}
