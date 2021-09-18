import {
  Controller,
  Get,
  Param,
  Post,
  ParseIntPipe,
  UsePipes,
  ValidationPipe,
  Body,
  Query,
  DefaultValuePipe,
} from '@nestjs/common';

import { FishingSpotService } from './fishingspot.service';
import { FishingSpot } from './fishingspot.entity';
import { CreateFishingspotDto } from './dto/create-fishingspot.dto';
import { Pagination } from 'nestjs-typeorm-paginate';

@Controller()
export class FishingSpotController {
  constructor(private readonly fishingspotService: FishingSpotService) {}

    @Get('/fishing-spots/')
    async getAllFishingSpot(): Promise<FishingSpot[]> {
    return await this.fishingspotService.getAllFishingSpot();
  }

  // need to paginate with the top
  @Get('/fishing-spots/p')
  async index(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number = 1,
    @Query('limit', new DefaultValuePipe(4), ParseIntPipe) limit: number = 4,
  ): Promise<Pagination<FishingSpot>> {
    limit = limit > 100 ? 100 : limit;
    return this.fishingspotService.paginate({
      page,
      limit,
    });
  }

  @Get('/fishing-spots/:id')
  async getFishingSpotById(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<FishingSpot> {
    console.log('hello');
    return await this.fishingspotService.getFishingSpotById(id);
  }

  @Post('fishing-spots/create')
  @UsePipes(ValidationPipe)
  async createFishingSpot(@Body() fishingspotData: CreateFishingspotDto) {
    return await this.fishingspotService.createFishingSpot(fishingspotData);
  }
}
