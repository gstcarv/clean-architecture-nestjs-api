import { createMock } from 'ts-jest-mock';
import { productMock } from 'src/tests/products/product.mock';
import { HttpStatusCodes } from 'src/application/helpers/http/http-status-codes';
import { FullProductResponse } from 'src/application/dto/product/FullProductResponse';
import { UpdateProductByIdHandler } from '../update-product-by-id.handler';
import { UpdateProductByIdUseCase } from 'src/domain/usecases/product/update-product-by-id.usecase';

describe('Update product by ID handler', () => {
    beforeEach(() => setup());

    let updateProductByIdHandler: UpdateProductByIdHandler;

    // Mocks
    let updateProductByIdUCMock: jest.Mocked<UpdateProductByIdUseCase>;

    function setup() {
        updateProductByIdUCMock = createMock<UpdateProductByIdUseCase>({
            perform: jest.fn(),
        });

        updateProductByIdHandler = new UpdateProductByIdHandler(
            updateProductByIdUCMock,
        );
    }

    test('it should return OK response with product data when update', async () => {
        const mockCreated = productMock.create();
        updateProductByIdUCMock.perform.mockResolvedValue(mockCreated);

        const saveProductDto = productMock.createSaveDto();

        const response = await updateProductByIdHandler.execute({
            body: saveProductDto,
            params: { id: 'mock-id' },
        });

        expect(updateProductByIdUCMock.perform).toHaveBeenCalledWith(
            saveProductDto,
        );

        expect(response.statusCode).toBe(HttpStatusCodes.OK);
        expect(response.data).toBeInstanceOf(FullProductResponse);
    });
});
