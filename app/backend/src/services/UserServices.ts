import UserModel from '../database/models/UserModel';
// import IUserModel from '../interfaces/IUserModel';
import ILogin from '../interfaces/ILogin';
import JWTCreate from '../middleware/Token';
import * as bcrypt from 'bcryptjs';
import JoiValid from '../middleware/JoiValidate';
class UserServices {
  private db = UserModel;

  LoginService = async (body: ILogin): Promise<string> => {
    const check = JoiValid(body);

    const { email, password } = check;

    const users = await this.db.findOne({ where: { email }, raw: true });
    console.log('services', users?.password);
    

    if (!users) throw new Error('400|unregistered person');

    if (!bcrypt.compareSync(password, users?.password)) {
      throw new Error('401|Incorrect email or password');
    }

    const generateToken = JWTCreate.generateToken(email, password);

    return generateToken;
  }
}
export default UserServices;
