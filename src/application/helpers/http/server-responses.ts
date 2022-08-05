import { HttpResponse } from './http-response';
import HttpStatusCodes from './http-status-codes';

export const ok = <T = unknown>(data: T): HttpResponse<T> => ({
    statusCode: HttpStatusCodes.OK,
    data,
});

export const created = <T = unknown>(data: T): HttpResponse<T> => ({
    statusCode: HttpStatusCodes.CREATED,
    data,
});

export const badRequest = (error: Error): HttpResponse<Error> => ({
    statusCode: HttpStatusCodes.BAD_REQUEST,
    data: error,
});

export const forbidden = (error: Error): HttpResponse<Error> => ({
    statusCode: HttpStatusCodes.FORBIDDEN,
    data: error,
});
