import { ValidationError } from 'src/application/errors/ValidationError';
import { Validation } from 'src/application/protocols/validation';

export class ValidationExecuter implements ValidationHandler {
    constructor(private readonly validations: Validation[]) {}

    perform() {
        for (const validation of this.validations) {
            const result = validation.validate();

            if (result !== true) return result;
        }

        return true;
    }
}

export abstract class ValidationHandler {
    abstract perform(): ValidationError | true;
}
