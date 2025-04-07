import { model } from "mongoose";
import positionsSchema from "../schema/positionSchema.js";

const positionsModel = new model("position", positionsSchema);

export default positionsModel;