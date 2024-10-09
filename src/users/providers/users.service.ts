import { Injectable } from "@nestjs/common";
import { GetUsersParamDto } from "../dtos/get-users-param.dto";
import { AuthService } from "src/auth/providers/auth.service";

@Injectable()
export class UsersService{
    constructor(
        private readonly authService: AuthService,
    ){}

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
    public findOneById(id: string){
        return {
            id: 1234,
            firstName: 'Alice',
            email: 'alice@doe.com',
        }
    }
}