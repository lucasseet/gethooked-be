import { Body, Controller, Get, HttpCode, Module, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { CreatePostDto } from "./dto/create-post.dto";
import { PostService } from "./post.service";

@Controller('community')

export class PostController {

    constructor(private postService: PostService ){}

    @Get('/')
    getAllPost(){
        return this.postService.getAllPost()
    }

    @Post('/create')
    @HttpCode(200)
    @UsePipes(ValidationPipe)
    async createPost(@Body() postData: CreatePostDto) {
        return await this.postService.createNewPost(postData)

    }
}