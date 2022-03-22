import { IsString } from "class-validator";

export class CreateBlogpostDto {
    @IsString()
    readonly id: string;

    @IsString()
    readonly owner: string;

    @IsString()
    readonly title: string;

    @IsString()
    readonly content: string;
}
