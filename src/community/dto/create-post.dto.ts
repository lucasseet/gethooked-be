import {  IsNotEmpty, IsEnum, Length } from 'class-validator';

enum FishSpieces {
  fish1,
  fish2,
  fish3,
}

export class CreatePostDto {
  @IsNotEmpty({message: 'Image is required'})
  image: string;

  @IsNotEmpty()
  location: string;

  @IsNotEmpty()
  @IsEnum(FishSpieces)
  species: string;

  @IsNotEmpty()
  @Length(8, 255)
  description: string;

  @IsNotEmpty()
  fishingspotId: number

}
