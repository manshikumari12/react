const mongoose = require("mongoose")
const noteschema = mongoose.Schema({
    title:{type:String, reuired:unique},
    disc:{type:String},
    name:{type:string},
    userid:{type:string},

    like:{type:[String],default:[]},
    likecount :{type:Number,default:0},
    Comment:{type:[String],default:[]},
    commentcount :{type:Number,default:0},
})
const notemoddel = mongoose.model("note",noteschema)

module.exports = {notemoddel}