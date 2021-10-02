const mongoose=require("mongoose");

//creating schema for courses

const courseSchema= new mongoose.Schema(
    {
        title:{type:String,required:true},
        authorImage:{type:String,required:true},
        authorName:{type:String,required:true},
        company:{type:String,required:true},
        description:{type:String,required:true},
        duration:{type:String,required:true},
        backgroundImage:{type:String,required:true}

    }
)

//creating model for course schema

const Course=mongoose.model("course",courseSchema);


module.exports = Course;
