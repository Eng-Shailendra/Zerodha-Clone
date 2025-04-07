import { model } from "mongoose";
import userSchema from "../schema/userSchema.js";
import passportLocalMongoosel from "passport-local-mongoose";

userSchema.plugin(passportLocalMongoosel);
const userModel = model("User", userSchema);


export default userModel;