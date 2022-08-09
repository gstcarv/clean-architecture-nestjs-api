import { ValidationError } from 'src/application/errors/ValidationError';
import { Validation } from 'src/application/protocols/validation';

export class LengthValidator extends Validation<LengthValidator.Options> {
    constructor(
        private readonly field: string,
        private readonly input: string | unknown[],
        private readonly options: LengthValidator.Options,
    ) {
        super(field, input, options);
    }

    validate(): true | ValidationError {
        const { min, max } = this.options;

        const validationError = new ValidationError(
            LengthValidator.name,
            `Field "${this.field}" must have length between ${min} and ${max}`,
        );

        if (
            ((typeof this.input === 'string' || Array.isArray(this.input)) &&
                this.input.length > max) ||
            this.input.length < min
        ) {
            return validationError;
        }

        return true;
    }
}

namespace LengthValidator {
    export type InputType = string | unknown[];

    export type Options = {
        min: number;
        max: number;
    };
}
