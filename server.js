const express=require('express')
const app=express()

app.set('view-engine', 'ejs')
app.use(express.static(__dirname + '/public'));

app.get('/',(req,res)=>{
    res.render('index.ejs')
})

app.get("/sortAlgo", (req,res)=>{
    res.render('sortAlgo.ejs')
})


app.listen(process.env.PORT || 8000)