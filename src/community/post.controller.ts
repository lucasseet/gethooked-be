import { Body, Controller, Get, HttpCode, Param, ParseIntPipe, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { CreatePostDto } from "./dto/create-post.dto";
import { PostService } from "./post.service";
import { Posts } from './post.entity';


@Controller('community')

export class PostController {

    constructor(private postService: PostService ){}

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
    async createPost(@Body() postData: CreatePostDto) {
        return await this.postService.createNewPost(postData)

    }
}