
import signupScheamJoi from "./joiSchema.js";
import ExpressError from "./expressError.js";
import passport from "passport";


const isloggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        req.session.redirectUrl = req.originalUrl;
    } else {
        res.redirectUrl('/login')
    }
}
export { isloggedIn };

const saveRedirecturl = (req, res, next) => {
    if (req.session.redirectUrl) {
        req.locals.redirectUrl = req.session.redirectUrl
    }
    next()
}
export { saveRedirecturl }


// vaidating signup from joi
const validateSignup = (req, res, next) => {
    let { error } = signupScheamJoi.validate(req.body)
    if (error) {
        throw new ExpressError(400, result.error)
    } else {
        next();
    }
}
export { validateSignup };