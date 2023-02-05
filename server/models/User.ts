import { prop, getModelForClass, modelOptions } from "@typegoose/typegoose";
import bcrypt from "bcryptjs";

@modelOptions({ schemaOptions: { timestamps: true } })
export class User {
  @prop({ required: true, type: String })
  email!: string;

  @prop({ required: true, type: String })
  password!: string;

  public async comparePassword(password: string) {
    return await bcrypt.compare(password, this.password);
  }

  public async hashPassword() {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  }
}

export default getModelForClass(User);
