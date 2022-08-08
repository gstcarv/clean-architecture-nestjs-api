export class EntityNotFoundError extends Error {
    name = 'EntityNotFound';

    constructor() {
        super('Cannot found specified entity');
    }
}
