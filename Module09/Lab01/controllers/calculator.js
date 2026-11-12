const model=require('../models/calculator');
exports.calculate=(req,res)=>{try {const {a,b}=req.query;if(a===undefined||b===undefined||a.trim()===''||b.trim()==='') throw new Error('a and b are required');res.json({result:model.calculate(req.params.operation,Number(a),Number(b))});}catch(e){res.status(400).json({error:e.message});}};
