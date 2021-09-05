import {
    Controller,
    Get,
    Param,
    ParseIntPipe,
    
  } from '@nestjs/common';

import {FishingSpotService} from './fishingspot.service'
import {FishingSpot} from './fishingspot.entity'


  
  @Controller()
  export class FishingSpotController {
    constructor(private readonly fishingspotService: FishingSpotService) {}


    @Get('/:id/fishing-spots')
    async getFishingSpotById(@Param('id', ParseIntPipe) id: number): Promise<FishingSpot> {
      return await this.fishingspotService.getFishingSpotById(id);
    }
    
    
    

  }
  