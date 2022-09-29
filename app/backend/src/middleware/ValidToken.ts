import { Request, Response, NextFunction } from 'express';
import IGetUserAuthInfoRequest from '../interfaces/IGetUserAuthInfoRequest';
import ILoginEmail from '../interfaces/ILoginEmail';
import jwtToken from './Token';

const valid = {
  Token: (req: Request, _res:Response, next:NextFunction) => {
    const { authorization } = req.headers;
    const dados:ILoginEmail = jwtToken.validateToken(authorization as unknown as string);
    (req as IGetUserAuthInfoRequest).user = dados;
    next();
  },
};

export default valid;
