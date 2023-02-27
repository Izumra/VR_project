import express from 'express'
import { addClient } from '../backend/connectorDB.js'
import cookieParser from 'cookie-parser'

const route=express.Router()
route.use(cookieParser())

route.get('/',(req,res)=>{
    res.clearCookie('admin')
    res.render('HomePage',{title:"Home page"})
})

route.post('/', async(req,res)=>{
    addClient(req.body)
    res.redirect('/')
})

export default route