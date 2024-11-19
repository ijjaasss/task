const express=require('express')
const mongoose=require('mongoose')
const app=express()
mongoose.connect('mongodb://localhost:27017/task')

const textSchema=new mongoose.Schema({
    text:String
})
const textModel=mongoose.model('task',textSchema,'task')
app.get('/create',(req,res)=>{
    const newtext=new textModel({
        text:'hai'
    })
    newtext.save()
    res.send(newtext)
})
app.get('/read',(req,res)=>{
    textModel.find({}).then((users)=>{
        res.send(users)
    }).catch((err)=>{
        console.log(err);
        
    })
})
app.get('/update',(req,res)=>{
    textModel.updateOne({text:'hai'},{text:"hello"}).then((result)=>{
        res.send('success')
    }).catch((err)=>{
        console.log(err);
        
    })
})

app.get('/delete',(req,res)=>{
    textModel.deleteOne({text:'hai'}).then((result)=>{
       res.send('deleted')
        
    }).catch((err)=>{
        console.log(err);
        
    })
})

app.listen(3000,()=>{
    console.log('server run 300');
    
})