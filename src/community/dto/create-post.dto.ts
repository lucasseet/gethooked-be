import { IsNotEmpty, IsEnum, Length } from 'class-validator';

enum FishSpieces {
  channelCatfish,
  whiteBass,
  rockBass,
  smallmouthBass,
  commonCarp,
  northernPike,
  longearSunfish,
  whiteCrappie,
  buffalo
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
