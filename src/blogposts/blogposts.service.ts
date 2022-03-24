import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateBlogpostDto } from './dto/create-blogpost.dto';
import { UpdateBlogpostDto } from './dto/update-blogpost.dto';
import { Blogpost, BlogpostDocument } from 'src/schemas/blogpost.schema';

@Injectable()
export class BlogpostsService {
  constructor(
    @InjectModel('Blogpost') private blogpostModel: Model<BlogpostDocument>,
  ) {}

  async create(createBlogpostDto: CreateBlogpostDto): Promise<Blogpost> {
    const createdBlogpost = new this.blogpostModel(createBlogpostDto);
    return createdBlogpost.save();
  }

  async findAll(): Promise<BlogpostDocument[]> {
    return await this.blogpostModel.find().exec();
  }

  async findById(id: string) {
    return this.blogpostModel.findById({ _id: id });
  }

  async update(id: string, updateBlogpostDto: UpdateBlogpostDto) {
    return this.blogpostModel.updateOne(
      { id },
      { $set: { ...updateBlogpostDto } },
    );
  }

  async remove(id: string) {
    return this.blogpostModel.remove({ id });
  }
}
