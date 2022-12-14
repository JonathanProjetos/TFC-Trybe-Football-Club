import * as bcrypt from 'bcryptjs';
import User from '../database/models/UserModel';
// import IUserModel from '../interfaces/IUserModel';
import ILogin from '../interfaces/ILogin';
import JWTCreate from '../middleware/Token';
import { validateLogin } from '../middleware/JoiValidate';

class LoginServices {
  private db = User;

  LoginService = async (body: ILogin): Promise<string> => {
    const check = validateLogin(body);

    const { email, password } = check;

    const users = await this.db.findOne({ where: { email }, raw: true });
    console.log('services', users);

    if (!users) throw new Error('401|Incorrect email or password');

    if (!bcrypt.compareSync(password, users?.password)) {
      throw new Error('401|Incorrect email or password');
    }

    const generateToken = JWTCreate.generateToken(email);

    return generateToken;
  };
}
export default LoginServices;
