import { PartialType, PickType } from '@nestjs/mapped-types';
import { IsString } from 'class-validator';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PickType(CreateUserDto, ['name'] as const) {
    @IsString()
    readonly name: string;
}
