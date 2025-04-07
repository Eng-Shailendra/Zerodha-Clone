import { model, } from "mongoose";

import holdingSchema from "../schema/holdingSchema.js";


const holdingsModel = new model("holding", holdingSchema);

export default holdingsModel;