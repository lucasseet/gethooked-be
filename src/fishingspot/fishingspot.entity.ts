import { BaseEntity, Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import{ Posts } from '../community/post.entity'
import { FishCount } from "./fishingspot.interfaces";


@Entity('fishing-spot')
export class FishingSpot extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    location: string;

    @Column()
    image: string;

    @Column()
    description: string;
  

    @OneToMany(() => Posts, (posts) => posts.fishingspot)
    posts: Posts[];

    
    fishCount?: FishCount[]

}