
import { model } from "mongoose";

import orderSchema from "../schema/orderSchema.js";



const orderModel = new model("order", orderSchema)

export { orderModel }