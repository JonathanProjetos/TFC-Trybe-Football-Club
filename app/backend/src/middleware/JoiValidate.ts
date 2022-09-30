import * as Joi from 'joi';
import IMatcherBody from 'src/interfaces/IMatcherBody';
import ILogin from '../interfaces/ILogin';

const MESSAGE = 'All fields must be filled';

const ObjectLogin = Joi.object({
  email: Joi.string().required().email().messages({
    'any.required': `400|${MESSAGE}`,
    'string.base': '400|email must be the type String',
    'string.email': '401|Incorrect email or password',
    'string.empty': `400|${MESSAGE}`,
  }),

  password: Joi.string().min(6).required().messages({
    'any.required': `400|${MESSAGE}`,
    'string.base': `400|${MESSAGE}`,
    'string.empty': `400|${MESSAGE}`,
  }),
});

const validateLogin = (dados: ILogin): ILogin => {
  const user = ObjectLogin;

  const { error, value } = user.validate(dados);

  if (error) {
    console.log(error);

    throw error;
  }
  return value;
};

const obejectMatche = Joi.object({
  homeTeam: Joi.number().required().messages({
    'any.required': '400|homeTeam is required',
  }),
  awayTeam: Joi.number().required().messages({
    'any.required': '400|awayTeam is required',
  }),
  homeTeamGoals: Joi.number().required().messages({
    'any.required': '400|homeTeamGoals is required',
  }),
  awayTeamGoals: Joi.number().required().messages({
    'any.required': '400|awayTeamGoals is required',
  }),
});

const validateMatches = (dados:IMatcherBody) => {
  const object = obejectMatche;

  const { error, value } = object.validate(dados);

  if (error) {
    console.log(error);

    throw error;
  }
  return value;
}

export { validateMatches, validateLogin};
