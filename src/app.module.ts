require('dotenv').config()
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { typeOrmConfigAsync } from './config/typeorm.config';
import { UsersModule } from './users/users.module';
import { PostModule } from './community/post.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync(typeOrmConfigAsync),
    UsersModule,
    PostModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
