const mongoose=require("mongoose");

//creating schema for courses

const bookmarkSchema= new mongoose.Schema(
    {
        courseId:{type:mongoose.Schema.Types.ObjectId, ref:"course" ,required:false},

    },
    {
        versionKey:false,
        timestamps:true
    }
)

//creating model for course schema

const Bookmark=mongoose.model("bookmark",bookmarkSchema);


module.exports = Bookmark;
