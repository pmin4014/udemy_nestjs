import { Injectable } from "@nestjs/common";
import { GetUsersParamDto } from "../dtos/get-users-param.dto";

@Injectable()
export class UsersService{

    public findAll(
        getUserParamDto: GetUsersParamDto,
        limit: number,
        page: number,
    ){

        return [{
            firstName: 'John',
            email: 'john@doe.com',
        },
        {
            firstName: 'Alice',
            email: 'alice@doe.com',
        }
    ]
    }

    /**
     * find user by ID
     */
    public findOneById(id:number){
        return {
            id: 1234,
            firstName: 'Alice',
            email: 'alice@doe.com',
        }
    }
}