import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreatePostDto } from "./dto/create-post.dto";
import { PostRepository } from "./post.repository";

@Injectable()

export class PostService {
    constructor(@InjectRepository(PostRepository) private postRepository:PostRepository,
    
    ){}
        
    getAllPost() {
        return [1,2,3, 'test']
    }

    async createNewPost(post: CreatePostDto){
        return await this.postRepository.save(post)
    }

}