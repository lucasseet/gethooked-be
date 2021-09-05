import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import {JwtModule} from "@nestjs/jwt";

@Module({
  providers: [UsersService],
  controllers: [UsersController],
  imports: [
    JwtModule.register({
    secret: 'secret',
    signOptions: {expiresIn: '1d'}
})]
})
export class UsersModule {}