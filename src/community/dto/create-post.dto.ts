import {  IsNotEmpty, Length } from 'class-validator';

export class CreatePostDto {
  @IsNotEmpty({message: 'Image is required'})
  image: string;

  @IsNotEmpty()
  location: string;

  @IsNotEmpty()
  species: string;

  @IsNotEmpty()
  @Length(8, 255)
  description: string;

}
