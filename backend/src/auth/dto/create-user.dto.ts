import { IsEmail, IsEmpty, IsString, MaxLength, MinLength } from "class-validator";
import { BaseDto } from "./base-user.dto";

export class RegisterDto extends BaseDto{

    @IsString()
    @MinLength(5)
    @MaxLength(50)
    name!: string;

    @IsString()
    @MinLength(9)
    @MaxLength(13)
    phone!: string;

    @IsString()
    @IsEmpty()
    profileImage?: string;
}