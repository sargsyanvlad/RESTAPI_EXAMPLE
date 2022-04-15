import { HTTP_STATUS } from './httpStatus';
import { NOT_FOUND_ERROR, SOMETHING_WENT_WRONG } from './errorMessage';
import { RIDES_NOT_FOUND_ERROR, RIDES_VALIDATION_ERROR } from './ridesErrorMessages';

export const constants = {
  statusCodes: { ...HTTP_STATUS },
  Errors: {
    RIDES_NOT_FOUND_ERROR,
    RIDES_VALIDATION_ERROR,
    SOMETHING_WENT_WRONG,
    NOT_FOUND_ERROR,
  },
  options: {
    swaggerDefinition: {
      info: {
        title: 'REST API',
        version: '1.0.0',
        description: 'Rest API Design Pattern Example',
      },
    },
    apis: ['src/docs/swagger.yml'],
  },
};
