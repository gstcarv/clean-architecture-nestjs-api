import HttpStatusCodes from './http-status-codes';

export type HttpResponse<TResponseData = unknown> = {
    statusCode: HttpStatusCodes;
    data: TResponseData;
};
