import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreatePostDto } from "./dto/create-post.dto";
import { PostRepository } from "./post.repository";
import { Posts } from './post.entity';
import { FishingSpot } from "src/fishingspot/fishingspot.entity";

@Injectable()

export class PostService {
    constructor(@InjectRepository(PostRepository) private postRepository:PostRepository,
    
    ){}
        
    async getAllPost(): Promise<Posts[]> {
        return await this.postRepository.find()

      }

    async getPostById(id: number): Promise<Posts> {
        return await this.postRepository.findOne(id);
      }

    async createNewPost(
        post: CreatePostDto, 
        fishingspot: FishingSpot,

        ): Promise<Posts> {
        const newPost = await this.postRepository.save({
            location: post.location,
            image: post.image,
            description: post.description,
            species: post.species,
        })

        fishingspot.posts = [...fishingspot.posts, newPost];
        await fishingspot.save();

        return newPost;
    }

    async remove(id: number): Promise<Posts> {
        const post = await this.postRepository.findOne(id);
        return this.postRepository.remove(post)
      }

}