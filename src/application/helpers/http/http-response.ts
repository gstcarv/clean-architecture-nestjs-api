import { HttpStatusCodes } from './http-status-codes';

export type HttpResponse<TResponseData = any> = {
    statusCode: HttpStatusCodes;
    data?: TResponseData;
    error?: TResponseData;
};
