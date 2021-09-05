import { BaseEntity, Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";

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

}