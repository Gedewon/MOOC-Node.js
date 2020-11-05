const express = require('express');
const bodyParser = require('body-parser');

const promoRouter = express.Router();

promoRouter.use(bodyParser.json());

promoRouter.route('/')
.all((req,res,next) => { 
    
    res.statusCode = 200; 
    res.setHeader('Content-Type','text/plain');
    next();

})
.get((req,res)=>{
  res.end('Will send all the promotions to you');
})
.post((req,res,next)=>{
  res.end('will add the dish:'+ req.body.name + 
       'with details: '+ req.body.description);
})
.put((req,res,next)=>{
  res.statusCode = 403;
  res.end('PUT operation on /promotions');
})
.delete((req,res)=>{
  res.end('Deleting all the promotions');
});

promoRouter.route('/:promoId')

.get((req,res)=>{
    res.end('Will send '+req.params.promoId+' the promotion to you');
  })
.post((req,res,next)=>{
    res.statusCode = 403;
    res.end('Post operation on /promotion'+req.params.promoId);
         
  })
  .put((req,res,next)=>{
    res.write('Updating the dish:' + req.params.promoId + '\n');
    res.end('will update the dish: '+ req.body.name + 'with details: '+ req.body.description);
  })
  .delete((req,res)=>{
    res.end('Deleting  the promotion'+req.params.promoId);
  });


module.exports = promoRouter;