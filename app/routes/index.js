const adminRouter=require('./admin/admin')
const postRouter=require('./admin/posts')

module.exports=app=>{

app.use('/admin',adminRouter);
app.use('/admin/posts',postRouter);
}
