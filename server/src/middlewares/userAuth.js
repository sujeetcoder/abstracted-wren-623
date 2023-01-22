const User = require("../models/user.model")
const IP = require("ip")

const userAuth = async (req, res, next) => {
    let ipAddress = IP.address()
    const _id = req?.cookies?._id
    const user = await User.findOne({_id})

    if(user){
    if(user.logStatus == true && user.status === "active" && user.ipAddress == ipAddress ){
        req.user = req?.cookies?._id
       return next()
    } else {
        res.status(401).send("user has not permision for this opration")
    }
    } else {
        res.status(401).send("user not exist please signup first")
    }
    
  }



module.exports = userAuth