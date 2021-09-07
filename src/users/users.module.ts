import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import {JwtModule} from "@nestjs/jwt";
import * as dotenv from 'dotenv'
dotenv.config()

@Module({
  providers: [UsersService],
  controllers: [UsersController],
  imports: [
    JwtModule.register({
    secret: process.env.JWT_TOKEN_SECRET,
    signOptions: {expiresIn: '1d'}
})]
})
export class UsersModule {}