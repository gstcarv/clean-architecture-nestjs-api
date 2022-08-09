import { HttpStatusCodes } from '../http-status-codes';
import {
    badRequest,
    created,
    forbidden,
    noContent,
    notFound,
    ok,
} from '../server-responses';

describe('Server Responses', () => {
    test('ok response should return correct data', () => {
        const okResponse = ok({ mockData: 'mock-data' });

        expect(okResponse.statusCode).toBe(HttpStatusCodes.OK);
        expect(okResponse.data.mockData).toBe('mock-data');
    });

    test('created response should return correct data', () => {
        const createdResponse = created({ mockData: 'mock-data' });

        expect(createdResponse.statusCode).toBe(HttpStatusCodes.CREATED);
        expect(createdResponse.data.mockData).toBe('mock-data');
    });

    test('badRequest response should return correct data', () => {
        const badRequestResponse = badRequest(new Error());

        expect(badRequestResponse.statusCode).toBe(HttpStatusCodes.BAD_REQUEST);
        expect(badRequestResponse.error).toBeInstanceOf(Object);
        expect(badRequestResponse.data).toBeUndefined();
    });

    test('forbidden response should return correct data', () => {
        const forbiddenResoinse = forbidden(new Error());

        expect(forbiddenResoinse.statusCode).toBe(HttpStatusCodes.FORBIDDEN);
        expect(forbiddenResoinse.error).toBeInstanceOf(Object);
        expect(forbiddenResoinse.data).toBeUndefined();
    });

    test('notFound response should return correct data', () => {
        const notFoundResponse = notFound(new Error());

        expect(notFoundResponse.statusCode).toBe(HttpStatusCodes.NOT_FOUND);
        expect(notFoundResponse.error).toBeInstanceOf(Object);
        expect(notFoundResponse.data).toBeUndefined();
    });

    test('noContent response should return correct data', () => {
        const noContentResponse = noContent(new Error());

        expect(noContentResponse.statusCode).toBe(HttpStatusCodes.NO_CONTENT);
        expect(noContentResponse.error).toBeInstanceOf(Object);
        expect(noContentResponse.data).toBeUndefined();
    });
});
