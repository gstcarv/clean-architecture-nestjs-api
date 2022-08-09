import { HttpException } from '@nestjs/common';
import { Request, Response } from 'express';
import { ValidationError } from 'src/application/errors/ValidationError';
import { HttpRequestData } from 'src/application/helpers/http/http-request-data';
import { HttpStatusCodes } from 'src/application/helpers/http/http-status-codes';
import { badRequest } from 'src/application/helpers/http/server-responses';
import { ControllerHandler } from 'src/application/protocols/controller-handler';

export type NestRouteParams = unknown[];

export class NestRouteAdapter {
    static adapt(handler: ControllerHandler<unknown>) {
        return async (req: Request, res: Response) => {
            const { body, params = {}, query = {} } = req;

            const httpRequest: HttpRequestData = { body, params, query };

            const validation = handler.validate(httpRequest)?.perform();

            if (validation instanceof ValidationError) {
                return res
                    .json(badRequest(validation))
                    .status(HttpStatusCodes.BAD_REQUEST);
            }

            const { data, statusCode } = await handler.execute(httpRequest);

            if (data instanceof Error) {
                const { name, message } = data;

                throw new HttpException({ name, message }, statusCode);
            }

            return res.json(data).status(statusCode);
        };
    }
}
