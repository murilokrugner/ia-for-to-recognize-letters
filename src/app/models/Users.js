import mongoose from "mongoose";

const UsersSchema = new mongoose.Schema({
  name: String,
  course: String,
  age: String
});

export default mongoose.model("Users", UsersSchema);
