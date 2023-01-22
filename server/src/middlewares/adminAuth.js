const User = require("../models/user.model")
const IP = require("ip")

const adminAuth = async (req, res, next) => {
    let ipAddress = IP.address()
    const _id = req?.cookies?._id
    const user = await User.findOne({_id})
    if(user){
    if(user.role==="admin" || user.role==="CEO" && user.status === "active" && user.ipAddress == ipAddress){
        req.mail2 = user.email
        req.objId = req?.cookies?._id
       return next()
    } else {
        res.status(401).send("user has not permision for this opration")
    }
} else {
    res.status(401).send("user not exist please signup first")
}
    
  }



module.exports = adminAuth