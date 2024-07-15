const express=require('express')
const Jobcontroller=require('../Controller/Job')
const JObroute=express.Router()
JObroute.get('/',(req,res)=>{
    res.json({success:true,information:{
        forcreatingjob:"use /createjob",
        forgettingallthejobs:"use /getalljobs",
        forupdatejob:"use /update/:id",
        fordeletingjob:"use /delete/:id"
    }})
})
JObroute.post("/createjob",Jobcontroller.createJob)
JObroute.get('/getalljobs',Jobcontroller.getalljobs)
JObroute.put('/update/:id',Jobcontroller.updateJob)
JObroute.delete('/delete/:id',Jobcontroller.deleteJob)
module.exports=JObroute;