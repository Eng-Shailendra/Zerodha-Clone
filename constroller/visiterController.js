import holdingsModel from "../model/holdingModel.js"
import positionsModel from '../model/positionModel.js';
import { orderModel } from '../model/orderModel.js'
import wrapAsync from '../wrapAsync.js';

import userModel from "../model/userModel.js";


const allholdings = () => {
    wrapAsync(async (req, res) => {

        let allholdings = await holdingsModel.find({})
        res.json(allholdings)
    })
}
export { allholdings };

const positions = () => {
    wrapAsync(async (req, res) => {
        let allpositions = await positionsModel.find({})
        res.json(allpositions)
    })
}
export { positions }

const buyOrder = () => {
    wrapAsync((req, res) => {
        const newBuyOrder = new orderModel({
            name: req.body.name,
            price: req.body.price,
            qty: req.body.qty,
            mode: req.body.mode,
        });

        newBuyOrder.save();

        res.send("order is saved")

    })
}
export { buyOrder }

const sellOrder = () => {
    wrapAsync(async (req, res) => {

        const newSellOrder = new orderModel({
            name: req.body.name,
            price: req.body.price,
            qty: req.body.qty,
            mode: req.body.mode,
        })
        await newSellOrder.save();
        res.send("order is selled")

    })
}
export { sellOrder }

const order = () => {
    wrapAsync(async (req, res) => {
        const orders = await orderModel.find({})
        res.json(orders);

    })
}
export { order }

const home = async (req, res) => {
    // console.log(req)
    if (req.isAuthenticated()) {
        let data = req.user
        console.log("this authenticated home")
        res.json(data)
    } else {
        res.send("home url getting secessfully")
    }
}
export { home }


const signup = wrapAsync(async (req, res, next) => {
    try {
        const { username, password, email } = req.body;
        let data = userModel.register({ username, email }, password);
        req.login(data, (err) => {
            if (err) {
                return next(err)
            }
            req.redirect(`/users/${req.body.username}`);
        })
        res.status(200).json({ message: 'Signup successful ' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
})
export { signup }

// const login = wrapAsync(async (req, res, next) => {
//     try{
//         const {username, password}= req.body

//     }
//     res.send("login page getting secessfully")
// })
// export { login }

const loginSubmit = wrapAsync((req, res, next) => {
    try {
        const { username, password } = req.body

        // req.login(username, password, function (err) {
        //     if (err) { return next(err); }
        //     return res.redirect('/users/' + req.user.username);
        // });
        // passport.authenticate("local", {
        //     failureRedirect: '/login',
        //     failureMessage: true
        // })

    } catch (error) {
        console.log(error)
    }

})
export { loginSubmit }