const Validator = require('fastest-validator');
import { Rides } from '../validation/schemas';
import { constants } from '../../config';
const { statusCodes } = constants;

const isValidated = function (validationResult) {
  if (Array.isArray(validationResult)) {
    return {
      error_code: 'VALIDATION_ERROR',
      message: validationResult,
    };
  }
  return true;
};

export const createRides = (req, res, next) => {
  const v = new Validator();
  const check = v.compile(Rides.create);
  const checkResult = check(req.body);
  const isValid = isValidated(checkResult);

  if (isValid === true) {
    next();
  } else {
    return res.status(statusCodes.BAD_REQUEST).json(isValid);
  }
};

export const getRides = (req, res, next) => {
  const v = new Validator();
  const check = v.compile(Rides.get);
  const checkResult = check(req.params);
  const isValid = isValidated(checkResult);

  if (isValid === true) {
    next();
  } else {
    return res.status(statusCodes.BAD_REQUEST).json(isValid);
  }
};

export const deleteRide = (req, res, next) => {
  const v = new Validator();
  const check = v.compile(Rides.delete);
  const checkResult = check(req.params);
  const isValid = isValidated(checkResult);

  if (isValid === true) {
    next();
  } else {
    return res.status(statusCodes.BAD_REQUEST).json(isValid);
  }
};
