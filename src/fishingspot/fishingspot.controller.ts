import {
    Controller,
    Get,
    Param,
    Post,
    ParseIntPipe,
    UsePipes,
    ValidationPipe,
    Body
    
  } from '@nestjs/common';

import {FishingSpotService} from './fishingspot.service'
import {FishingSpot} from './fishingspot.entity'
import { CreateFishingspotDto } from "./dto/create-fishingspot.dto";


  
  @Controller()
  export class FishingSpotController {
    constructor(private readonly fishingspotService: FishingSpotService) {}


    @Get('/fishing-spots/')
    async getAllFishingSpot(): Promise<FishingSpot[]> {
    return await this.fishingspotService.getAllFishingSpot();
  }
    
    
    @Get('/fishing-spots/:id')
    async getFishingSpotById(@Param('id', ParseIntPipe) id: number): Promise<FishingSpot> {
      return await this.fishingspotService.getFishingSpotById(id);
    }


    @Post('fishing-spots/create')
    @UsePipes(ValidationPipe)
    async createFishingSpot(@Body() fishingspotData: CreateFishingspotDto) {
      return await this.fishingspotService.createFishingSpot(fishingspotData);
    }
    

  }
  