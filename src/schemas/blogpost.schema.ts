import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BlogpostDocument = Blogpost & Document;

@Schema()
export class Blogpost {
    @Prop()
    id: string;

    @Prop()
    owner: string;

    @Prop()
    title: string;

    @Prop()
    content: string;
}

export const BlogpostSchema = SchemaFactory.createForClass(Blogpost);