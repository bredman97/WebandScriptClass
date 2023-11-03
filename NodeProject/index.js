var connect = require('connect')

var app = connect()

function helloworld(req,res,next)
{
  res.setHeader('Content-Type', 'text/plain');
  res.end('hello world');
}
app.use(helloworld);
app.listen(3000);
console.log('server is running on local host')