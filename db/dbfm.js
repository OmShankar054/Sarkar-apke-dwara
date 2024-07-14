const  mongoose = require("mongoose");
const { default: camp } = require("./camp");

mongoose.connect("mongodb://localhost:27017/SARKAR")
.then(()=>{
    console.log("mongoose connected");
})
.catch(() => {
    console.log("database not connected");
})

const user = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    password:{
        type:String,
        required:true
    }
})

const collection = new mongoose.model("camp", camp)

module.exports= collection