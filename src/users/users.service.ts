import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserDocument } from 'src/schemas/user.schema';

@Injectable()
export class UsersService {
  constructor(@InjectModel("User") private userModel: Model<UserDocument>){}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const createdBlogpost = new this.userModel(createUserDto);
    return createdBlogpost.save();
  }

  async findAll(): Promise<UserDocument[]> {
    return await this.userModel.find().exec();
  }

  async findOne(id: string) {
    return this.userModel.findOne({ id });
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    return this.userModel.updateOne( { id }, { $set: { ...updateUserDto }});
  }

  async remove(id: string) {
    return this.userModel.remove({ id });
  }
}
