import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FishingSpotRepository } from './fishingspot.repository';
import { FishingSpotService } from './fishingspot.service';
import { FishingSpotController } from './fishingspot.controller';


@Module({
  controllers: [FishingSpotController],
  providers: [FishingSpotService],
  imports: [TypeOrmModule.forFeature([FishingSpotRepository ])]
})
export class FishingspotModule {}