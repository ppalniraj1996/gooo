const {Router} =require('express')

const {connection ,News} =require("../mongodb");

const newsRouter =Router();

newsRouter.post("/news",async(req,res)=>{
    const news =await new News({...req.body})
    news.save(err,success) =>{
        res.send("news Recieved");
    }
})

newsRouter.get("/get",async(req,res)=>{
    const {page_no} =req.query;
    const params =req.query
    console.log(params.Location);
    if(page_no){
        const newsData =await News.find().skip((page_no-1)*10)
        return res.json(newsData);
    }
    else if(params){
        const data =await News.find(params)
        return res.json(data);
    }
    else if(params.Title){
        const newsData =await News.find(Title:params.Title)
        return res.json(newsData);
    }
    else if(params.tags){
        const newsData =await News.find(tags:params.tags)
        return res.json(newsData);
    }

    const data =await News.find()
    return res.json(data);
})