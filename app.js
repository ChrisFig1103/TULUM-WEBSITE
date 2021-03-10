const express = require ('express')
const app = express()
const port = 3000 || process.env.PORT;

app.use(express.static('./library'))

app.set('view engine', 'pug')

app.get('/',function(req,res){
    res.sendFile('index.html',{root:__dirname})
})

app.listen(port, ()=>console.log (`Example app listening on port${port}`))