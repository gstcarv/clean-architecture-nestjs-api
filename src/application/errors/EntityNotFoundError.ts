export class EntityNotFoundError extends Error {
    constructor() {
        super('Cannot found specified entity');
    }
}
