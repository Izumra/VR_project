import cookieParser from "cookie-parser";
import express from "express";
import dotenv from "dotenv";

dotenv.config()
const route=new express.Router()
route.use(cookieParser())

route.get('/',(req,res)=>{
    res.clearCookie('admin')
    res.render('Auth')
})

route.post('/',(req,res)=>{
    if(req.body?.name==process.env.ADMINNAME&&req.body?.pass==process.env.ADMINPASS){
        let date = new Date()
        date.setHours(date.getHours() + 5)
        res.cookie('admin',req.body.name,{
            secure:true,
            httpOnly:true,
            expires:date
        })
        res.redirect('/admin')
    }
    else res.redirect('/')
})

export default route