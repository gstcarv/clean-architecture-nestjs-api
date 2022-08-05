import { Request, Response } from 'express';
import { HttpRequestData } from 'src/application/helpers/http/http-request-data';
import { ControllerHandler } from 'src/application/protocols/controller-handler';

export type NestRouteParams = unknown[];

export class NestRouteAdapter {
    static adapt(handler: ControllerHandler<unknown>) {
        return async (req: Request, res: Response) => {
            const { body, params = {}, query = {} } = req;

            const httpRequest: HttpRequestData = { body, params, query };

            const { data, statusCode } = await handler.execute(httpRequest);

            res.json(data).status(statusCode);
        };
    }
}
