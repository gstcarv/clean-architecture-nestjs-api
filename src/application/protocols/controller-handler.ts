import { HttpRequestData } from '../helpers/http/http-request-data';
import { HttpResponse } from '../helpers/http/http-response';

export abstract class ControllerHandler<TResponseType = unknown> {
    abstract execute(
        request: HttpRequestData,
    ): Promise<HttpResponse<TResponseType>>;
}
