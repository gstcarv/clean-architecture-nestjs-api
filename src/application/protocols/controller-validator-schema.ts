import { ValidationHandler } from 'src/validation/validation-executer';
import { HttpRequestData } from '../helpers/http/http-request-data';
import { Validation } from './validation';

export abstract class ControllerValidatorSchema {
    abstract build: (requestData: HttpRequestData) => ValidationHandler;
}
