import { createMock } from 'ts-jest-mock';
import { productMock } from 'src/tests/products/product.mock';
import { HttpStatusCodes } from 'src/application/helpers/http/http-status-codes';
import { CreateProductHandler } from '../create-product.handler';
import { CreateProductUseCase } from 'src/domain/usecases/product/create-product.usecase';
import { FullProductResponse } from 'src/application/dto/product/FullProductResponse';

describe('Create product handler', () => {
    beforeEach(() => setup());

    let createProductHandler: CreateProductHandler;

    // Mocks
    let createProductUCMock: jest.Mocked<CreateProductUseCase>;

    function setup() {
        createProductUCMock = createMock<CreateProductUseCase>({
            perform: jest.fn(),
        });

        createProductHandler = new CreateProductHandler(createProductUCMock);
    }

    test('it should return OK response with product data on create', async () => {
        const mockCreated = productMock.create();
        createProductUCMock.perform.mockResolvedValue(mockCreated);

        const saveProductDto = productMock.createSaveDto();

        const response = await createProductHandler.execute({
            body: saveProductDto,
        });

        expect(createProductUCMock.perform).toHaveBeenCalledWith(
            saveProductDto,
        );
        expect(response.statusCode).toBe(HttpStatusCodes.CREATED);
        expect(response.data).toBeInstanceOf(FullProductResponse);
    });
});
