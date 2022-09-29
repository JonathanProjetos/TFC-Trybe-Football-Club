import { JwtPayload } from 'jsonwebtoken';

interface ILoginEmail {
  email:string | JwtPayload
}

export default ILoginEmail;
