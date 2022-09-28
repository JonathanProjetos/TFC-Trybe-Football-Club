import UserModel from '../database/models/UserModel';
// import IUserModel from '../interfaces/IUserModel';
import ILogin from '../interfaces/ILogin';
import JWTCreate from '../middleware/Token';

class UserServices {
  private db = UserModel;

  async Login(body:ILogin):Promise<string> {
    const { username, password } = body;

    const users = this.db.findOne({ where: { username } });

    if (!users) throw new Error('400|Pessoa não cadastrada');
    const generateToken = JWTCreate.generateToken(username, password);

    return generateToken;
  }
}
export default UserServices;
