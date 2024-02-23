const express=require('express');
const app=express();
const run= ()=>{

}

module.exports=()=>{
    const port=process.env.APP_PORT
    app.listen(port,()=>{
        console.log(`runing server on port ${port}`);
    })
}