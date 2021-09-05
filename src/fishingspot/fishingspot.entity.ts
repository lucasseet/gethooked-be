import { BaseEntity, Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import{ Posts } from '../community/post.entity'


@Entity('fishing-spot')
export class FishingSpot extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    location: string;
  

    @OneToMany(() => Posts, (posts) => posts.fishingspot)
    posts: Posts[];

}