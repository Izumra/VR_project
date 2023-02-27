import express from 'express'
import dotenv from 'dotenv'
import GRoute from './middleware/Routes/GRoute.js'

dotenv.config()

const app=express()

app.set('view engine','ejs')
app.set('views','./public/views')
app.use(express.static('./public'))
app.use(express.urlencoded({extended:true}))
GRoute(app)

app.listen(process.env.PORTSITE)

console.log("Server was started on: http://localhost:"+process.env.PORTSITE)