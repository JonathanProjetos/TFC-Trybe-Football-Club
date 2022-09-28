import UserModel from '../database/models/UserModel';
// import IUserModel from '../interfaces/IUserModel';
import ILogin from '../interfaces/ILogin';
import JWTCreate from '../middleware/Token';

class UserServices {
  private db = UserModel;

  LoginService= async (body:ILogin):Promise<string> => {
    const { email, password } = body;

    const users = await this.db.findOne({ where: { email }, raw:true });

    console.log('services', users);
    

    if (!users) throw new Error('400|Pessoa não cadastrada');
    const generateToken = JWTCreate.generateToken(email,password);

    return generateToken;
  }
}
export default UserServices;
