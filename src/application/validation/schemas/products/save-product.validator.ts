import { CreateProductHandler } from 'src/application/handlers/product/create-product.handler';
import { UpdateProductByIdHandler } from 'src/application/handlers/product/update-product-by-id.handler';
import { ControllerValidatorSchema } from 'src/application/protocols/controller-validator-schema';
import { LengthValidator } from 'src/validation/length-validator';
import { NumberValidator } from 'src/validation/number-validator';
import { ObjectIdValidator } from 'src/validation/object-id-validator';
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
        const { body, params } = requestData;

        const validations = new ValidationExecuter([
            new LengthValidator('name', body.name, { min: 3, max: 255 }),
            new NumberValidator('price', body.price, { min: 0, max: 9999 }),
            new ObjectIdValidator('id', body.id),
            new ObjectIdValidator('id', params.id),
        ]);

        return validations;
    }
}
