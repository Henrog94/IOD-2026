const router=require('express').Router();router.get('/:operation',require('../controllers/calculator').calculate);module.exports=router;
