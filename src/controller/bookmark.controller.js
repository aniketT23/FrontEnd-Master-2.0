const express=require("express");

const router=express();

const Bookmark= require("../models/bookmark.model");





//creating crud api for courses




router.post("",async(req,res)=>
{
    const course=await Bookmark.create(req.body);
     return res.status(201).send({course});
})

router.get("",async (req,res)=>
{
    const bookmark= await Bookmark.find().populate('courseId').lean().exec();

    //  return res.status(200).send({bookmark});
    res.render("bookmarkfinal.ejs",
    {
        bookmark:bookmark,
        
 })

 

})



router.patch("/:id",async(req,res)=>
{
    const course=await Bookmark.findByIdAndUpdate(req.params.id,req.body , {new:true}).lean().exec();
    return res.status(201).send({course});
})


router.delete("/:id",async(req,res)=>
{
    const course=await Bookmark.findByIdAndDelete(req.params.id).lean().exec();
    return res.status(201).send({course});
})


router.get("/:id",async(req,res)=>
{
    const course=await Bookmark.findById(req.params.id).lean().exec();
    return res.status(201).send({course});
})



module.exports=router;
