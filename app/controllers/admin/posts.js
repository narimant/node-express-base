const postModel=require('../../models/post')

exports.index=async(req,res)=>{
    const posts=await postModel.findAll();
    res.render('admin/posts/index',{layout:'admin',posts})
}