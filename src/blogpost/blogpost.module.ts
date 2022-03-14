import { Module } from '@nestjs/common';
import { BlogpostController } from './blogpost.controller';
import { BlogpostService } from './blogpost.service';

@Module({
  controllers: [BlogpostController],
  providers: [BlogpostService]
})
export class BlogpostModule {}
