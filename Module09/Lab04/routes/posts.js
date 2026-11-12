const r=require('express').Router();const c=require('../controllers/posts').createController();r.get('/',c);r.get('/:id',c);module.exports=r;
