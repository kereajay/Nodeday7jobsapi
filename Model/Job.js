const mongoose=require('mongoose')
const jobschema=new mongoose.Schema({
    title:{
        type:String
    },
    description:{
        type:String

    },
    company:{
        type:String
    },
    location:{
        type:String
    },
    salary:{
        type:Number
    }
})

const Jobschema=mongoose.model("linkedin",jobschema)
module.exports=Jobschema