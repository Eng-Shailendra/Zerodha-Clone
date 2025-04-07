
const userHome = (req, res, next) => {
    res.send("the user id getting secessfully")
}
export { userHome }


const logout = () => {
    (req, res, next) => {
        req.logOut((err) => {
            if (err) {
                return next(err)
            }
            req.flash("success", "you are logged out!")
            req.redirect("/home")
        })
    }
}
export { logout }