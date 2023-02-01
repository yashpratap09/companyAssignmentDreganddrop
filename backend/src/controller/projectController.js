const projectModel = require("../models/projectModel")

const createProject = async function(req,res){
    try{
    const data = req.body

    const createProject = await projectModel.create(data)
    return res.status(201).send({status:true , message : "Successfully create" , data:createProject})
    }catch(error){
        return res.status(500).send(error.message)
    }

}



const getData = async function (req, res) {
try{
    const getData = await projectModel.find()
    return res.status(200).send({ status: true, data: getData });
}catch(error){
    return res.status(500).send(error.message)
}

}

const updateData = async function(req,res){
    try{
    let data = req.body
    const update = await projectModel.findOneAndUpdate({Title:data.Title} , {$set:{Status:data.Status}} , {new:true})
    return res.status(200).send({status:true, data:update})
}catch(error){
    return res.status(500).send(error.message)
}


}


module.exports={updateData,getData,createProject}