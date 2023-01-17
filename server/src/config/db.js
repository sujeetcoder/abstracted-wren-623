const { default: mongoose } = require("mongoose");
mongoose.set('strictQuery', false);


const connectMongo=async()=>{
    return  mongoose.connect( process.env.DB_URL, {dbName: 'apple'}, {useNewUrlParser: true, useUnifiedTopology: true, strictQuery: true}, async(req,res) =>{
          try {
              console.log("success")
          } catch (err) {
              console.log(err)
          }
    })
  }


  module.exports = connectMongo