import { GetProductByIdUseCase } from 'src/domain/usecases/product/get-product-by-id.usecase';
import { GetProductByIdHandler } from '../get-product-by-id.handler';
import { createMock } from 'ts-jest-mock';
import { productMock } from 'src/tests/products/product.mock';
import { HttpStatusCodes } from 'src/application/helpers/http/http-status-codes';
import { EntityNotFoundError } from 'src/application/errors/EntityNotFoundError';
import { FullProductResponse } from 'src/application/dto/product/FullProductResponse';

describe('Get product by ID handler', () => {
    beforeEach(() => setup());

    let getProductByIdHandler: GetProductByIdHandler;

    // Mocks
    let getProductByIdUCMock: jest.Mocked<GetProductByIdUseCase>;

    function setup() {
        getProductByIdUCMock = createMock<GetProductByIdUseCase>({
            perform: jest.fn(),
        });

        getProductByIdHandler = new GetProductByIdHandler(getProductByIdUCMock);
    }

    test('it should return OK response with product data if product found', async () => {
        getProductByIdUCMock.perform.mockResolvedValue(productMock.create());

        const response = await getProductByIdHandler.execute({
            params: { id: '1' },
        });

        expect(getProductByIdUCMock.perform).toHaveBeenCalledWith('1');
        expect(response.statusCode).toBe(HttpStatusCodes.OK);
        expect(response.data.name).toBe('mock-product-name');
        expect(response.data).toBeInstanceOf(FullProductResponse);
    });

    test('it should return Not Found response if product was not found', async () => {
        getProductByIdUCMock.perform.mockResolvedValue(null);

        const promise = await getProductByIdHandler.execute({
            params: { id: '1' },
        });

        expect(getProductByIdUCMock.perform).toHaveBeenCalledWith('1');
        expect(promise.statusCode).toBe(HttpStatusCodes.NOT_FOUND);
        expect(promise.data).toBeInstanceOf(EntityNotFoundError);
    });
});
