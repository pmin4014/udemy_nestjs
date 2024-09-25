import { PartialType } from "@nestjs/mapped-types";
import { CreateUserDto } from "./create-user.dto";

//CreateUserDto의 속성을 PatchUserDto에 상속한다(optional으로) > 같은 코드 작성 방지, 해당 Dto에서 사용된 유효성 검사 데코레이터도 유지한다.
export class PatchUserDto extends PartialType(CreateUserDto){}