import { Injectable, } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { FishingSpot } from "./fishingspot.entity";
import { FishingSpotRepository } from "./fishingspot.repository";


@Injectable()
export class FishingSpotService {
    constructor(@InjectRepository(FishingSpotRepository) private fishingspotRepository:FishingSpotRepository,
    
    ){}

    async getFishingSpotById(id: number): Promise<FishingSpot> {
        return await this.fishingspotRepository.findOne(id, {
          relations: ['posts'],
        });
      }

}