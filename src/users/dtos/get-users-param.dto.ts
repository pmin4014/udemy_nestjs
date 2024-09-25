import { Type } from "class-transformer";
import { IsInt, IsOptional } from "class-validator";

export class GetUsersParamDto{
    @IsOptional()
    @IsInt()
    //Http 요청의 쿼리는 기본적으로 문자열이라서 Type을 사용해서 Number로 변환해준다
    @Type(()=>Number)
    id?: number;
}