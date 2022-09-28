import UserModel from '../database/models/UserModel';

interface IUserServices {
  Login(): Promise<UserModel[]>
}

export default IUserServices;
