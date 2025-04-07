import { Router } from "express";
import { logout } from "../constroller/userController.js";
import { userHome } from "../constroller/userController.js";
const userRouter = Router({ mergeParams: true })


userRouter.get(
    "/id", userHome
)

userRouter.get("/logout", logout)
export { userRouter }