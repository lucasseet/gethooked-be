import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModuleAsyncOptions, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Users } from '../users/users.entity';
import { Post } from '../community/post.entity';

export default class TypeOrmConfig {
    static getOrmConfig(configService: ConfigService): TypeOrmModuleOptions {
      return {
        type: 'mysql',
        host: configService.get('MYSQL_HOST'),
        port: configService.get('MYSQL_PORT'),
        username: configService.get('MYSQL_USER'),
        password: configService.get('MYSQL_PASS'),
        database: configService.get('MYSQL_DB'),
        entities: [Users, Post],
        autoLoadEntities: true,
        synchronize: true,
        logging: true,
      };
    }
  }


  export const typeOrmConfigAsync: TypeOrmModuleAsyncOptions = {
    imports: [ConfigModule],
    useFactory: async (configService: ConfigService): Promise<TypeOrmModuleOptions> => TypeOrmConfig.getOrmConfig(configService),
    inject: [ConfigService]
  };

