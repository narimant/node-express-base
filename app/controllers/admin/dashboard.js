const statistics=require('@models/statistics')


exports.index=async(req,res)=>{
 const totalUsers= await  statistics.totalUsers();
 const totalComments= await  statistics.totalComments();
 const totalPosts= await  statistics.totalPosts();
 const totalViews= await  statistics.totalViews();
 res.render('admin/dashboard/index',{layout:'admin',totalUsers,totalComments,totalPosts,totalViews})
    
}