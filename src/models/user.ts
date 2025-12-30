import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema({
  firstname: String,
  lastname: String,
  username: String,
  email: { type: String, unique: true, required: [true, "Email Required!"] },
  password: {
    type: String,
    require: [true, "Password Required!"],
  },
  about: String,
  profileURL: String,
  address: String,
  slug: { type: String, required: [true, "Slug is required!"] },
});

export const User =
  mongoose.models.users || mongoose.model("users", UserSchema);
