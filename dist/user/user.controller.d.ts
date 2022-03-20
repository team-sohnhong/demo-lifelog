import { UserService } from './user.service';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UpdateUserDto } from 'src/users/dto/update-user.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(createUserDto: CreateUserDto): Promise<import("../schemas/user.schema").User>;
    findAll(): Promise<import("../schemas/user.schema").UserDocument[]>;
    findOne(id: string): Promise<import("../schemas/user.schema").User & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<import("mongodb").UpdateResult>;
    remove(id: string): Promise<any>;
}
