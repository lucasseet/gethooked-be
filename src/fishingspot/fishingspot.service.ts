import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FishingSpot } from './fishingspot.entity';
import { FishingSpotRepository } from './fishingspot.repository';
import { CreateFishingspotDto } from './dto/create-fishingspot.dto';
import {paginate, Pagination, IPaginationOptions} from 'nestjs-typeorm-paginate';


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

  // Need to paginate with the top
  async paginate(options: IPaginationOptions): Promise<Pagination<FishingSpot>> {
    return paginate<FishingSpot>(this.fishingspotRepository, options);
  }

  async getFishingSpotById(id: number): Promise<FishingSpot> {
    const fishingSpot = await this.fishingspotRepository.findOne(id, {
      relations: ['posts'],
    });
    const countData = await this.fishingspotRepository.query(
      `SELECT species, count(species) as "count"
      FROM gethooked.community
      WHERE location = "Lower pierce reservoir"
      GROUP BY (species)
      ORDER BY (species)`,
      
    )
    console.log({countData})

    fishingSpot.fishCount = countData
    
    return fishingSpot
  }

  async createFishingSpot(fishingspot: CreateFishingspotDto) {
    return await this.fishingspotRepository.save(fishingspot);
  }
}
