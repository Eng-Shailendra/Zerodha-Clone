import Joi from "joi";

const signupScheamJoi = Joi.object(
    {
        email: Joi.string().required().email(),
        username: Joi.string().required(),
        password: Joi.string().required()
    }
)

export default signupScheamJoi