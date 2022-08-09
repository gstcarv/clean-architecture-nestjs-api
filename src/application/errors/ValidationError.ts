export class ValidationError extends Error {
    constructor(name: string, validationMessage: string) {
        super(validationMessage);
        this.name = name;
        this.message = validationMessage;
    }
}
