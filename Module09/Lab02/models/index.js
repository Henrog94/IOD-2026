const mongoose=require('mongoose');
const ref=(model)=>({type:mongoose.Schema.Types.ObjectId,ref:model,required:true});
const User=mongoose.model('User',new mongoose.Schema({username:{type:String,required:true,trim:true},email:{type:String,required:true,unique:true,lowercase:true,trim:true}},{timestamps:true}));
const Post=mongoose.model('Post',new mongoose.Schema({user:ref('User'),title:{type:String,required:true},description:{type:String,required:true},image:{type:String,default:''}},{timestamps:true}));
const Comment=mongoose.model('Comment',new mongoose.Schema({user:ref('User'),post:ref('Post'),text:{type:String,required:true}},{timestamps:true}));
const likeSchema=new mongoose.Schema({user:ref('User'),post:ref('Post')},{timestamps:true});likeSchema.index({user:1,post:1},{unique:true});const Like=mongoose.model('Like',likeSchema);
module.exports={User,Post,Comment,Like,connect:()=>mongoose.connect(process.env.MONGODB_URI||'mongodb://127.0.0.1:27017/bloggingDB')};
