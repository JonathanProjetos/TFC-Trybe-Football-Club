import * as Joi from 'joi';
import ILogin from '../interfaces/ILogin';

const validateLogin = (dados: ILogin): ILogin => {
  const user = Joi.object({
    email: Joi.string().required().email().messages({
      'any.required': '400|All fields must be filled',
      'string.base': '400|email must be the type String',
      'string.email': '401|Incorrect email or password',
      'string.empty': '401|Incorrect email or password',
    }),

    password: Joi.string().min(6).required().messages({
      'any.required': '400|All fields must be filled',
      'string.base': '400|password must be the type string',
      'string.empty': '401|Incorrect email or password',
    }),
  });

  const { error, value } = user.validate(dados);

  if (error) {
    throw error;
  }
  return value;
};

export default validateLogin;