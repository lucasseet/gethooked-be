import { Body, Controller, HttpStatus, Post, ValidationPipe } from '@nestjs/common';
import { SETTINGS } from 'src/app.utils';
import { UserRegisterRequestDto } from './dto/users-register.req.dto';
import { UsersService } from './users.service';
import { Users } from './users.entity';


@Controller('users')

export class UsersController {
  constructor(private usersService: UsersService){

  }
  

  @Post('/register')
  async doUserRegistration(
    @Body(SETTINGS.VALIDATION_PIPE)
    userRegister: UserRegisterRequestDto,
  ): Promise<Users> {
    return await this.usersService.doUserRegistration(userRegister);
  }
}