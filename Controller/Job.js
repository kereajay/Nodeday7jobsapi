const Jobschema=require('../Model/Job')
const createJob=(req,res)=>{
    console.log(req.body)
     Jobschema.create(req.body)
    res.json({success:true,info:req.body})
}

const getalljobs=async(req,res)=>{
    const alljobs=await Jobschema.find()
    
    res.json({success:true,allJobs:alljobs})
}

const updateJob=async(req,res)=>{
    const jobid=req.params.id
    // console.log(req.params)

    const updatedobj={
        $set:req.body
    }
    const olddata=await Jobschema.findById(req.params.id)
    const updateddata=await Jobschema.findByIdAndUpdate(req.params.id,updatedobj)
    const newdata=await Jobschema.findById(req.params.id)
    // console.log(newdata)
    res.json({success:true,id:jobid,message:"data updated successfully",olddata:olddata,updateddata:newdata})

}

const deleteJob=async(req,res)=>{
    const jobid=req.params.id
    const deletedJob=await Jobschema.findById(req.params.id)
   const response= await Jobschema.deleteOne({_id:jobid})
    res.json({success:true,message:"deleted successfully",deletedjob:deletedJob})
}
const Jobcontroller={
    getalljobs,
    createJob,
    updateJob,
    deleteJob,
}
module.exports=Jobcontroller