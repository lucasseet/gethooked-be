import { EntityRepository, Repository } from 'typeorm';
import { FishingSpot } from './fishingspot.entity';


@EntityRepository(FishingSpot)
export class FishingSpotRepository extends Repository<FishingSpot> {}
