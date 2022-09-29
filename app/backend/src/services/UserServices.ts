import * as bcrypt from 'bcryptjs';
import UserModel from '../database/models/UserModel';
// import IUserModel from '../interfaces/IUserModel';
import ILogin from '../interfaces/ILogin';
import JWTCreate from '../middleware/Token';
import JoiValid from '../middleware/JoiValidate';

class UserServices {
  private db = UserModel;

  LoginService = async (body: ILogin): Promise<string> => {
    const check = JoiValid(body);

    const { email, password } = check;

    const users = await this.db.findOne({ where: { email }, raw: true });

    if (!users) throw new Error('401|Incorrect email or password');

    if (!bcrypt.compareSync(password, users?.password)) {
      throw new Error('401|Incorrect email or password');
    }

    const generateToken = JWTCreate.generateToken(email);

    return generateToken;
  };
}
export default UserServices;
