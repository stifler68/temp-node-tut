
//****************************** HTTP ****************************/

const http = require("http");

const server = http.createServer((req, res)=>{
   if(req.url === '/'){
    res.end('Welcome to our page ')
   }
   if(req.url === '/about'){
    res.end('here is ur short history ')
   }
   res.end(`
   <h1> Oops! </h1>
   <p> can't seem to find thr page </p>
   `)

});

server.listen(5000);
