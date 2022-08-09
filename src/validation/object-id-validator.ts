import { ValidationError } from 'src/application/errors/ValidationError';
import { Validation } from 'src/application/protocols/validation';
import { ObjectID } from 'mongodb';

export class ObjectIdValidator extends Validation<null> {
    constructor(
        private readonly field: string,
        private readonly input: ObjectIdValidator.InputType,
    ) {
        super(field, input, null);
    }

    validate(): true | ValidationError {
        if (!this.input) return true;

        const validationError = new ValidationError(
            ObjectIdValidator.name,
            `Field "${this.field}" must be a valid ObjectId type`,
        );

        if (typeof this.input !== 'string') {
            return validationError;
        }

        if (!ObjectID.isValid(this.input)) {
            return validationError;
        }

        return true;
    }
}

namespace ObjectIdValidator {
    export type InputType = string;
}
