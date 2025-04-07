import { Router } from "express";
import { isloggedIn, saveRedirecturl, validateSignup } from '../middleware.js';
import { allholdings, buyOrder, home, loginSubmit, order, positions, sellOrder, signup } from "../constroller/visiterController.js";
import passport from "passport";
import wrapAsync from "../wrapAsync.js";
const visiterRouter = Router({ mergeParams: true });


visiterRouter.get('/allholdings', allholdings);
visiterRouter.get('/allpositions', positions);
visiterRouter.post('/buyOrder', buyOrder)
visiterRouter.post("/sellOrder", sellOrder)
visiterRouter.post("/orders", order)
visiterRouter.get("/home", home)

visiterRouter.post("/signup", validateSignup, signup);
// visiterRouter.get('/login', login);
visiterRouter.post('/login', passport.authenticate("local", { failureMessage: "the login is not successfully work" }), saveRedirecturl, loginSubmit,

)




export { visiterRouter }