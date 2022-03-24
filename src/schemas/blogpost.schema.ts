import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BlogpostDocument = Blogpost & Document;

@Schema({
//   id: true,
  toJSON: {
    virtuals: true,
    // transform: function (doc: any, ret: any) {
    //   delete ret._id;
    //   delete ret.__v;
    //   return ret;
    // },
  },
})
export class Blogpost {
//   @Prop()
//   id: string;

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
