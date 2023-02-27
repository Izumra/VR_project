import express from 'express';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';

dotenv.config()
const route=express.Router()
route.use(cookieParser())

route.get('/',(req,res)=>{
    if(req.cookies.admin){
        console.log('Mark')
        res.render('AdminPage')
    }
    else res.redirect('/')
})

export default route