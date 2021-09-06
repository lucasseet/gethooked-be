import { Body, Delete, Controller, Get, HttpCode, Param, ParseIntPipe, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { CreatePostDto } from "./dto/create-post.dto";
import { PostService } from "./post.service";
import { Posts } from './post.entity';
import {FishingSpotService} from '../fishingspot/fishingspot.service'


@Controller('community')

export class PostController {

    constructor(private postService: PostService, private fishingspotService: FishingSpotService ){}

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
    async createPost(@Body() postData: CreatePostDto): Promise<Posts> {
        const fishingspot = await this.fishingspotService.getFishingSpotById(postData.fishingspotId)
        return await this.postService.createNewPost(postData, fishingspot)

    }

    @Delete(':id')
    remove(@Param('id') id: string) {
    this.postService.remove(+id);
    return 'remove post successfully!'
  }
}