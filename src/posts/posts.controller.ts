import { Controller, Get, Param } from '@nestjs/common';
import { PostsService } from './providers/posts.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('posts')
@ApiTags('그룹이름 Posts')
export class PostsController {
    constructor(
        /**
         * Posts Service 주입
         */
        private readonly postsService:PostsService
    ){}

    @Get('/:userId?')
    public getPosts(@Param('userId') userId: string){
        return this.postsService.findAll(userId)
    }
}
