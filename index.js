// ! make variable and assign value
let http = require('http');
let finalhandler = require('finalhandler');
let Router = require('router');

const router = new Router()

let server = http.createServer( function(request, resonse) {
    router(request, response, finalhandler(request, response))
})

server.listen(3000, function() {
    console.log('Server already running on port 3000 !!!')
})


