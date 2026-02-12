import { IsEmail, IsEmpty, IsString, MaxLength, MinLength } from "class-validator";

export class BaseDto{

    @IsEmail()
    @MinLength(5)
    @MaxLength(50)
    email!: string;

    @IsString()
    @MaxLength(30)
    password!: string;
}