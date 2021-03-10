const express = require ('express')
const app = express()
const PORT = process.env.PORT || 3000;
 
app.use(express.static('../library'))

app.set('view engine', 'pug')

app.get('/',function(req,res){
    res.sendFile('./index.html',{root:__dirname})
})

app.listen(PORT, ()=>console.log (`Example app listening on port `))