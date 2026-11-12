const server=require('./app').listen(process.env.PORT||3000,'0.0.0.0',()=>console.log('Calculator running'));process.on('SIGTERM',()=>server.close());
