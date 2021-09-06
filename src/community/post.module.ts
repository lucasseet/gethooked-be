import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostController } from './post.controller';
import { PostService } from './post.service';
import { PostRepository } from './post.repository';
import { FishingSpotRepository } from '../fishingspot/fishingspot.repository';
import { FishingSpotService } from '../fishingspot/fishingspot.service';
import { FishingSpotController } from '../fishingspot/fishingspot.controller';



@Module({
  controllers: [PostController, FishingSpotController],
  providers: [PostService, FishingSpotService],
  imports: [TypeOrmModule.forFeature([PostRepository, FishingSpotRepository])]
})
export class PostModule {}