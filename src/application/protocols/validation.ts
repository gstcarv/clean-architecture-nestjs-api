import { ValidationError } from '../errors/ValidationError';

export abstract class Validation<T = unknown> {
    constructor(
        readonly fieldName: string,
        readonly fieldValue: unknown,
        readonly readonlyoptions: T,
    ) {}

    /**
     * Validate any provided input
     */
    abstract validate(): ValidationError | true;
}
