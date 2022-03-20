import { Controller } from '@nestjs/common';
import { BlogpostService } from './blogpost.service';
import { blogpost } from './entities/blogpost.entity';

@Controller('blogpost')
export class BlogpostController {
    constructor(private readonly userService: BlogpostService) {}
    
}
