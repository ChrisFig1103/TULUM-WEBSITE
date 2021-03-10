const express = require ('express')
const app = express()
 

app.use(express.static('./library'))

app.set('view engine', 'pug')

app.get('/',function(req,res){
    res.sendFile('index.html',{root:__dirname})
})

app.listen(3000 || process.env.PORT, ()=>console.log (`Example app listening on port `))