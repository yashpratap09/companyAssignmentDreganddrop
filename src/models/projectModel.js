const { default: mongoose } = require("mongoose")



const projectSchema = new mongoose.Schema({

    Title:{type:String,
        required:true
    }, 
    Description:{type:String,
        required:true,
        
    }, 
   
    Status:{type:String,
        required:true,
        enum:["Open","In-Progress","Completed"]
        

     }
    
},{timestamps:true})






module.exports = mongoose.model("TaskData",projectSchema)