import mongoose from "mongoose"


const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    username: { type: String }
});


export default userSchema;