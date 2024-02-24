const express=require('express');
const router=express.Router();
const postsController=require('../../controllers/admin/posts')

// --------admin routes with prefix /admin/....---------
router.get("/",postsController.index);

module.exports=router