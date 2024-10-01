import { Controller } from '@nestjs/common';
import { PostsService } from './providers/posts.service';

@Controller('posts')
export class PostsController {
    constructor(
        /**
         * Posts Service 주입
         */
        private readonly postsService:PostsService
    ){}
}
