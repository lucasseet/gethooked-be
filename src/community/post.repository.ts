import { EntityRepository, Repository } from "typeorm";
import { Posts } from './post.entity'

@EntityRepository(Posts)
export class PostRepository extends Repository<Posts> {}