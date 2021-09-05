import { FishingSpot } from "src/fishingspot/fishingspot.entity";
import { BaseEntity, Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne } from "typeorm";

@Entity('community')
export class Posts extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    image: string;
  
    @Column()
    location: string;
  
    @Column()
    species: string;

    @Column()
    description: string;
  
    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updatedAt: Date;

    @ManyToOne(()  => FishingSpot, (fishingspot) => fishingspot.posts)
    fishingspot: FishingSpot[];


}