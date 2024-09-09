import { Controller, Get, Post, Patch, Put, Delete, Param, Query, Body, Headers, Head, Ip } from '@nestjs/common';

@Controller('users')
export class UsersController {

    //:id?는 선택이다 없어도 접근가능, :id는 필수로 필요하다
    @Get('/:id/:optional?')
    public getUsers(@Param('id') id: any, @Query('limit') limit: any){
        console.log(id);
        console.log(limit);
        return "You sent a get request to users endpoint";
    }

    @Post()
    public createUsers(
        @Body() request: any,
        @Headers() headers: any,
        @Ip() ip: any,
    ){
        console.log(request);
        console.log(headers);
        console.log(ip);
        return "You sent a post request to users endpoint";
    }

    // @Patch()
    // public getUsers(){
    //     return "You sent a get request to users endpoint";
    // }
}
