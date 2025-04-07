import { Schema } from "mongoose";

const orderSchema = new Schema({
    name: String,
    price: Number,
    qty: Number,
    mode: String,
})

export default orderSchema;