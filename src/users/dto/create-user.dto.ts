import { IsString } from "class-validator";

export class CreateUserDto {
    @IsString()
    readonly address: string;
}
