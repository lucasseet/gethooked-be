import { Injectable } from '@nestjs/common';
import { UserRegisterRequestDto } from './dto/users-register.req.dto';
import { Users } from './users.entity';

@Injectable()
export class UsersService {
  
  async doUserRegistration(
    userRegister: UserRegisterRequestDto,
  ): Promise<Users> {
    const users = new Users();
    users.name = userRegister.name;
    users.email = userRegister.email;
    users.password = userRegister.password;

    return await users.save();
  }

  async findOne(condition: any): Promise<Users> {
    return Users.findOne(condition)
  }


}