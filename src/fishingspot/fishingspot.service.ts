import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FishingSpot } from './fishingspot.entity';
import { FishingSpotRepository } from './fishingspot.repository';
import { CreateFishingspotDto } from './dto/create-fishingspot.dto';

@Injectable()
export class FishingSpotService {
  constructor(
    @InjectRepository(FishingSpotRepository)
    private fishingspotRepository: FishingSpotRepository,
  ) {}

  async getAllFishingSpot(): Promise<FishingSpot[]> {
    return await this.fishingspotRepository
      .createQueryBuilder('f')
      .leftJoinAndSelect('f.posts', 'posts')
      .getMany();
  }

  async getFishingSpotById(id: number): Promise<FishingSpot> {
    return await this.fishingspotRepository.findOne(id, {
      relations: ['posts'],
    });
  }

  async createFishingSpot(fishingspot: CreateFishingspotDto) {
    return await this.fishingspotRepository.save(fishingspot);
  }
}
