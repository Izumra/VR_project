import express from 'express'

const route=express.Router()

route.get('/',(req,res)=>{
    res.render('HomePage',{title:"Home page"})
})

export default route