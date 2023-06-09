import connection from '../models/connection';
import UserModel from '../models/users.model';
import User from '../interfaces/users.interface';
import Login from '../interfaces/login.interface';
import Jwt from '../auth/jwt.auth';

class UserService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public async getByUsername(login: Login): Promise<Login> {
    const user = await this.model.getByUsername(login);
    
    return user;
  }

  public async create(user: User): Promise<string> {
    const newUser = await this.model.create(user);

    const token = Jwt.newToken(newUser);
    
    return token;
  }
}

export default UserService;