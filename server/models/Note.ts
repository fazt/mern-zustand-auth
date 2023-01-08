import {
  getModelForClass,
  modelOptions,
  prop,
  Ref,
} from "@typegoose/typegoose";
import { User } from "./User";

@modelOptions({
  schemaOptions: {
    timestamps: true,
  },
})
class Note {
  @prop()
  title: string;

  @prop()
  description: string;

  @prop({ ref: () => User, required: true })
  public author: Ref<User>;
}

export default getModelForClass(Note);
