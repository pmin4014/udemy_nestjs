import { Controller, Get, Post, Patch, Put, Delete, Param, Query, Body } from '@nestjs/common';

@Controller('users')
export class UsersController {

    //:id?는 선택이다 없어도 접근가능, :id는 필수로 필요하다
    @Get('/:id/:optional?')
    public getUsers(@Param() params: any, @Query() query: any){
        console.log(params);
        console.log(query);
        return "You sent a get request to users endpoint";
    }

    @Post()
    public createUsers(@Body() request: any){
        console.log(request);
        return "You sent a post request to users endpoint";
    }

    // @Patch()
    // public getUsers(){
    //     return "You sent a get request to users endpoint";
    // }
}
