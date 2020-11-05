const express = require('express');
const bodyParser = require('body-parser');

const dishRouter = express.Router();

dishRouter.use(bodyParser.json());

dishRouter.route('/')
.all((req,res,next) => { 
    
    res.statusCode = 200; 
    res.setHeader('Content-Type','text/plain');
    next();

})
.get((req,res)=>{
  res.end('Will send all the dishes to you');
})
.post((req,res,next)=>{
  res.end('will add the dish:'+ req.body.name + 
       'with details: '+ req.body.description);
})
.put((req,res,next)=>{
  res.statusCode = 403;
  res.end('PUT operation on /dishes');
})
.delete((req,res)=>{
  res.end('Deleting all the dishes');
});

dishRouter.route('/:dishId')

.get((req,res)=>{
    res.end('Will send '+req.params.dishId+' the dishes to you');
  })
.post((req,res,next)=>{
    res.statusCode = 403;
    res.end('Post operation on /dishes'+req.params.dishId);
         
  })
  .put((req,res,next)=>{
    res.write('Updating the dish:' + req.params.dishId + '\n');
    res.end('will update the dish: '+ req.body.name + 'with details: '+ req.body.description);
  })
  .delete((req,res)=>{
    res.end('Deleting  the dishes'+req.params.dishId);
  });
  
  
module.exports = dishRouter;