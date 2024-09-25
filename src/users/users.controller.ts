import { Controller, Get, Post, Patch, Put, Delete, Param, Query, Body, Headers, Head, Ip, ParseIntPipe, DefaultValuePipe, ValidationPipe } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';

@Controller('users')
export class UsersController {

    //:id?는 선택이다 없어도 접근가능, :id는 필수로 필요하다
    @Get('/:id?')
    public getUsers(@Param('id', ParseIntPipe) id: number | undefined,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number){
        console.log(limit);
        console.log(page);
        return "You sent a get request to users endpoint";
    }

    @Post()
    public createUsers(@Body() createUserDto: CreateUserDto){
        console.log(createUserDto);
        return "You sent a post request to users endpoint";
    }

    // @Patch()
    // public getUsers(){
    //     return "You sent a get request to users endpoint";
    // }
}
