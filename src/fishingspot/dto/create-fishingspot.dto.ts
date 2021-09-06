import {  IsNotEmpty, Length } from 'class-validator';


export class CreateFishingspotDto {

  // @IsNotEmpty()
  // image: string;

  @IsNotEmpty()
  location: string;

  // @IsNotEmpty()
  // species: string;

  @IsNotEmpty()
  @Length(3)
  description: string;

  // @IsNotEmpty()
  // cord: string;

}
