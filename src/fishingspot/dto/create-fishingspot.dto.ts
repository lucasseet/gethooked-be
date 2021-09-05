import {  IsNotEmpty } from 'class-validator';


export class CreateFishingspotDto {

  @IsNotEmpty()
  image: string;

  @IsNotEmpty()
  location: string;

  @IsNotEmpty()
  species: string;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  cord: string;

}
