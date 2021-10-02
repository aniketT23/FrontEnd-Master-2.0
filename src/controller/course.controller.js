const express=require("express");

const router=express();

const Course= require("../models/course.model");





//creating crud api for courses

router.get("",async (req,res)=>
{
    const course= await Course.find().lean().exec();
    

    console.log(req.body);

   res.render("all_courses2.ejs",
   {
       course:course,
   
       
})




 //  return res.status(200).send({course});
})


router.post("",async(req,res)=>
{
    const course=await Course.create(req.body);
    return res.status(201).send({course});
})

router.patch("/:id",async(req,res)=>
{
    const course=await Course.findByIdAndUpdate(req.params.id,req.body , {new:true}).lean().exec();
    return res.status(201).send({course});
})


router.delete("/:id",async(req,res)=>
{
    const course=await Course.findByIdAndDelete(req.params.id).lean().exec();
    return res.status(201).send({course});
})


router.get("/:id",async(req,res)=>
{
    const course=await Course.findById(req.params.id).lean().exec();
    return res.status(201).send({course});
})



module.exports=router;
