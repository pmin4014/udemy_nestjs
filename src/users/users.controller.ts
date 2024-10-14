import { Controller, Get, Post, Patch, Put, Delete, Param, Query, Body, Headers, Head, Ip, ParseIntPipe, DefaultValuePipe, ValidationPipe } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { GetUsersParamDto } from './dtos/get-users-param.dto';
import { PatchUserDto } from './dtos/patch-user.dto';
import { UsersService } from './providers/users.service';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('users')
@ApiTags('사용자 Users')
export class UsersController {
    constructor(
        //서비스 주입
        private readonly usersService: UsersService,
    ){}

    //:id?는 선택이다 없어도 접근가능, :id는 필수로 필요하다
    @Get('/:id?')
    @ApiOperation({
        summary: '등록된 사용자 목록을 가져온다.',
    })
    @ApiResponse({
        status: 200,
        description: '성공적으로 가져왔다.'
    })
    @ApiQuery({
        name: 'limit',
        type: 'number',
        required: false,
        description: '쿼리당 반환되는 항목 수',
        example: '10'
    })
    @ApiQuery({
        name: 'page',
        type: 'number',
        required: false,
        description: '반환될 페이지번호의 위치',
        example: '1'
    })
    public getUsers(
    @Param() getUsersParamDto: GetUsersParamDto,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number){

        return this.usersService.findAll(getUsersParamDto, limit, page);
    }

    @Post()
    public createUsers(@Body() createUserDto: CreateUserDto){
        console.log(createUserDto);
        return "You sent a post request to users endpoint";
    }

    @Patch()
    public patchUser(@Body() patchUserDto: PatchUserDto){
        return patchUserDto;
    }
}
