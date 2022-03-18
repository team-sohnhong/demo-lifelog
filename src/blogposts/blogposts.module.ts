import { Module } from '@nestjs/common';
import { BlogpostsService } from './blogposts.service';
import { BlogpostsController } from './blogposts.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { BlogpostSchema } from 'src/schemas/blogpost.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: "Blogpost", schema: BlogpostSchema }])],
  controllers: [BlogpostsController],
  providers: [BlogpostsService]
})
export class BlogpostsModule {}
