type HttpGetRequestData<TParams = unknown, TQuery = unknown> = {
    query?: TQuery;
    params?: TParams;
};

type HttpPostRequestData<TBody = unknown, TParams = unknown> = {
    body?: TBody;
    params?: TParams;
};

export type HttpRequestData<
    TBody = unknown,
    TParams = unknown,
    TQuery = unknown,
> = HttpGetRequestData<TParams, TQuery> & HttpPostRequestData<TBody, TParams>;
