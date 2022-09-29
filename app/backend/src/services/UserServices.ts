import User from '../database/models/UserModel';
import IRole from '../interfaces/IRole';

class UserServices {
  private db = User;

  UserService = async (email:string): Promise<IRole> => {
    const users = await this.db.findOne({ where: { email }, raw: true });
    console.log('services', users);

    if (!users) throw new Error('401|Incorrect email or password');

    return { role: users.role };
  };
}
export default UserServices;
