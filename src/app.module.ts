import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { BlogpostModule } from './blogpost/blogpost.module';

@Module({
  imports: [UserModule, BlogpostModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
