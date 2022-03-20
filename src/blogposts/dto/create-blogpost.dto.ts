import { IsString } from "class-validator";

export class CreateBlogpostDto {
    @IsString()
    readonly id: string;
}
