const express=require('express');
const router=express.Router();
const dashboardController=require('../controllers/admin/dashboard')

// --------admin routes with prefix /admin/....---------
router.use("/",dashboardController.index);

module.exports=router