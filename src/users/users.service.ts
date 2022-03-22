import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserDocument } from 'src/schemas/user.schema';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>){}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const createdUser = new this.userModel(createUserDto);
    return createdUser.save();
  }

  async findAll(): Promise<UserDocument[]> {
    return await this.userModel.find().exec();
  }

  async findOne(id: string) {
    return await this.userModel.findOne({ id });
  }

  async checkUser(address: string) {
    return await this.userModel.findOne({ 'addrress' : address }).exec();
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    return await this.userModel.updateOne( { id }, { $set: { ...updateUserDto }});
  }

  async remove(id: string) {
    return await this.userModel.remove({ id });
  }

  

}
