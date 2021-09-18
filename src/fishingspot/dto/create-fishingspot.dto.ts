import {  IsNotEmpty, Length } from 'class-validator';


export class CreateFishingspotDto {

  @IsNotEmpty()
  location: string;

  @IsNotEmpty()
  @Length(3)
  image: string;

  @IsNotEmpty()
  @Length(3)
  description: string;

  // @IsNotEmpty()
  // cord: string;

}
