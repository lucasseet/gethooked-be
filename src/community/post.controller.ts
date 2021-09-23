import { Body, Req, Delete, Controller, Get, HttpCode, Param, ParseIntPipe, Post, UsePipes, ValidationPipe, BadRequestException } from "@nestjs/common";
import { CreatePostDto } from "./dto/create-post.dto";
import { PostService } from "./post.service";
import { Request as ExpressRequest} from 'express'
import { JwtService } from '@nestjs/jwt';
import { Posts } from './post.entity';
import {FishingSpotService} from '../fishingspot/fishingspot.service'
import { IncomingHttpHeaders } from 'http';
import { UserToken } from "src/users/users.interfaces";



@Controller('community')

export class PostController {

    constructor(
      private postService: PostService, 
      private fishingspotService: FishingSpotService,
      private jwtService: JwtService
      ){}

    @Get('/')
    getAllPost(){
        return this.postService.getAllPost()
    }

    @Get('/:id')
    async getPostById(@Param('id', ParseIntPipe) id: number): Promise<Posts> {
      return await this.postService.getPostById(id);
    }
    

    @Post('/create')
    @HttpCode(200)
    @UsePipes(ValidationPipe)
    async createPost(
      @Body() postData: CreatePostDto,
      @Req () request: ExpressRequest, 
      
      ): Promise<Posts> {
        const headers = request.headers as IncomingHttpHeaders & {auth_token ?: string} 

        if(!headers ?.auth_token) {
          throw new BadRequestException(
            "No user auth token found"
          )
        }

        const token = headers.auth_token

        
        const fishingspot = await this.fishingspotService.getFishingSpotById(postData.fishingspotId)
        return await this.postService.createNewPost(postData, fishingspot)

    }

    @Delete(':id')
    remove(@Param('id') id: string) {
    this.postService.remove(+id);
    return 'remove post successfully!'
  }
}