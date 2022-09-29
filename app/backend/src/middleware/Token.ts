import { sign, verify } from 'jsonwebtoken';
import 'dotenv/config';
import ILoginEmail from '../interfaces/ILoginEmail';

// const { JWT_SECRET } = process.env;
const secret = process.env.JWT_SECRET || 'jwt_secret';

const jwtCheckUser = {

  generateToken: (email: string) => {
    const token = sign({ email }, secret, {
      expiresIn: '1d',
      algorithm: 'HS256',
    });
    return token;
  },

  validateToken: (token: string):ILoginEmail => {
    if (!token) throw new Error('401|Token not found');
    try {
      const payload = verify(token, secret);
      console.log(payload);
      return payload as ILoginEmail;
    } catch (error) {
      console.log(error);
      throw new Error('401|Invalid token');
    }
  },
};

export default jwtCheckUser;
