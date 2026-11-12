const app=require('express')();app.use('/api/posts',require('./routes/posts'));app.get('/',(req,res)=>res.json({examples:['/api/posts?userId=1','/api/posts/1']}));module.exports=app;
