import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BlogpostDocument = Blogpost & Document;

@Schema({
  toJSON: {
    virtuals: true,
  },
})
export class Blogpost {

  @Prop()
  owner: string;

  @Prop()
  title: string;

  @Prop()
  content: string;
}

const BlogpostSchema = SchemaFactory.createForClass(Blogpost);

BlogpostSchema.virtual('id').get(function (this: BlogpostDocument) {
  return this._id;
});

export { BlogpostSchema };
