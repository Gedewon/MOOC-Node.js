const express = require('express');
const bodyParser = require('body-parser');

const leaderRouter = express.Router();

leaderRouter.use(bodyParser.json());

leaderRouter.route('/')
.all((req,res,next) => { 
    
    res.statusCode = 200; 
    res.setHeader('Content-Type','text/plain');
    next();

})
.get((req,res)=>{
  res.end('Will send all the leaders to you');
})
.post((req,res,next)=>{
  res.end('will add the dish:'+ req.body.name + 
       'with details: '+ req.body.description);
})
.put((req,res,next)=>{
  res.statusCode = 403;
  res.end('PUT operation on /leaders');
})
.delete((req,res)=>{
  res.end('Deleting all the leaders');
});

leaderRouter.route('/:leaderId')

.get((req,res)=>{
    res.end('Will send '+req.params.leaderId+' the leaders to you');
  })
.post((req,res,next)=>{
    res.statusCode = 403;
    res.end('Post operation on /leaders'+req.params.leaderId);
         
  })
  .put((req,res,next)=>{
    res.write('Updating the dish:' + req.params.leaderId + '\n');
    res.end('will update the dish: '+ req.body.name + 'with details: '+ req.body.description);
  })
  .delete((req,res)=>{
    res.end('Deleting  the leaders'+req.params.leaderId);
  });

module.exports = leaderRouter;