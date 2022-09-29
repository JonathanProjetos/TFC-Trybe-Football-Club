import { sign, verify } from 'jsonwebtoken';
import 'dotenv/config';
// import ITokenInterface from '../interfaces/IToken';

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

  validateToken: (token: string) => {
    if (!token) throw new Error('401|Token not found');
    try {
      const test = verify(token, secret);
      return test;
    } catch (error) {
      console.log(error);
      throw new Error('401|Invalid token');
    }
  },
};

export default jwtCheckUser;
