import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/providers/users.service';

@Injectable()
export class AuthService {
    constructor(
        @Inject(forwardRef(()=>UsersService))
        private readonly usersService: UsersService,
    ){}

    public login(email: string, password: string, id: string){
        // 사용자가 데이터베이스에 존재하는지 체크
        // 로그인시 토큰 발급

        const user = this.usersService.findOneById('1234');

        return 'SAMPLE_TOKEN';
    }

    public isAuth(){
        // 사용자가 인증되었는지 구분해준다 true/false
        return true;
    }
}