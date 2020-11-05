const express = require('express');
const http = require('http');

const hostname = 'localhost';
const port = 3000;
const morgan = require('morgan');
const app = express();
const bodyParser = require('body-parser');
const dishRouter = require('./routes/dishRouter');
const promoRouter = require('./routes/promoRouter');
const leaderRouter = require('./routes/leaderRouter');

app.use(morgan('dev'));
app.use(bodyParser.json());


app.use('/dishes',dishRouter);
app.use('/promotions',promoRouter);
app.use('/leaders',leaderRouter);
app.use(express.static(__dirname + '/public'));



// app.get('/dishes/:dishId',(req,res)=>{
//   res.end('Will send '+req.params.dishId+' the dishes to you');
// });
// app.post('/dishes/:dishId',(req,res,next)=>{
//   res.statusCode = 403;
//   res.end('Post operation on /dishes'+req.params.dishId);
       
// });

// app.put('/dishes/:dishId',(req,res,next)=>{
//   res.write('Updating the dish:' + req.params.dishId + '\n');
//   res.end('will update the dish: '+ req.body.name + 'with details: '+ req.body.description);
// });
// app.delete('/dishes/:dishId',(req,res)=>{
//   res.end('Deleting  the dishes'+req.params.dishId);
// });


app.use((req, res, next) => {
  // console.log(req.headers);
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<html><body><h1>This is an Express Server</h1></body></html>');

});






const server = http.createServer(app);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});