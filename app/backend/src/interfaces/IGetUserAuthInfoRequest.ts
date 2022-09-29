import { Request } from 'express';
import ILoginEmail from './ILoginEmail';

interface IGetUserAuthInfoRequest extends Request {
  user: ILoginEmail
}

export default IGetUserAuthInfoRequest;
