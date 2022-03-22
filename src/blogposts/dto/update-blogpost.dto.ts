import { PartialType } from '@nestjs/mapped-types';
import { IsString } from 'class-validator';
import { CreateBlogpostDto } from './create-blogpost.dto';

export class UpdateBlogpostDto extends PartialType(CreateBlogpostDto) {
    @IsString()
    readonly id: string;

    @IsString()
    readonly owner: string;

    @IsString()
    readonly title: string;

    @IsString()
    readonly content: string;
}
