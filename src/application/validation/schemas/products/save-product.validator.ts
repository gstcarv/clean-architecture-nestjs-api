import { CreateProductHandler } from 'src/application/handlers/product/create-product.handler';
import { UpdateProductByIdHandler } from 'src/application/handlers/product/update-product-by-id.handler';
import { ControllerValidatorSchema } from 'src/application/protocols/controller-validator-schema';
import { LengthValidator } from 'src/validation/length-validator';
import {
    ValidationExecuter,
    ValidationHandler,
} from 'src/validation/validation-executer';

export class SaveProductValidator implements ControllerValidatorSchema {
    build(
        requestData:
            | CreateProductHandler.RequestData
            | UpdateProductByIdHandler.RequestData,
    ): ValidationHandler {
        const { body } = requestData;

        return new ValidationExecuter([
            new LengthValidator('name', body.name, { min: 3, max: 255 }),
        ]);
    }
}
