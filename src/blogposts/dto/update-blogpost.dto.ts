import { PartialType } from '@nestjs/mapped-types';
import { IsString } from 'class-validator';
import { CreateBlogpostDto } from './create-blogpost.dto';

export class UpdateBlogpostDto extends PartialType(CreateBlogpostDto) {
    
}
