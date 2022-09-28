import { sign } from 'jsonwebtoken';
import 'dotenv/config';
// import ITokenInterface from '../interfaces/IToken';

const JWT_SECRET = '123456';

const jwtCheckUser = {

  generateToken: (email:string, password: string) => {
    const token = sign({ email, password }, JWT_SECRET, {
      expiresIn: '1d',
      algorithm: 'HS256',
    });
    return token;
  },

  // validateToken: (token: string): ITokenInterface => {
  //   if (!token) throw new Error('401|Token not found');
  //   try {
  //     const test = jwt.verify(token, JWT_SECRET);
  //     return test as ITokenInterface;
  //   } catch (error) {
  //     console.log(error);
  //     throw new Error('401|Invalid token');
  //   }
  // },
};

export default jwtCheckUser;
