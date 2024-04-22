// 1) import json -server library

const jsonServer = require('json-server');

// 2) create server using create method inside json -server library

const mediaPlayerServer = jsonServer.create()

// 3) create the path for db.json fiel - router()

const router = jsonServer.router('db.json')

// 4) crate an midddleware to convert json to js 

const middleware = jsonServer.defaults()

// 5) server should use router as well as middleware -use()

mediaPlayerServer.use(middleware)
mediaPlayerServer.use(router)

// 6) set a port to the server
// process.env - to select the port that is available when the 4000 is consumed or used
const PORT = 4000 || process.env


// 7) run the server 
 mediaPlayerServer.listen(PORT,()=>{
    console.log(`server running successfullly at port ${PORT}`);
 })