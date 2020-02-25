const express = require("express")
const server = express()

server.get("/",function(req, res) {
        return res.send("Ok, cheguei aqui!")
})
server.listen(3000,function(){
    console.log("iniciei o servidor")
})