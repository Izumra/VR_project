import express from 'express'
import dotenv from 'dotenv'
import GRoute from './middleware/Routes/GRoute.js'

dotenv.config()

const app=express()
app.set('view engine','ejs')
app.set('views','./public/views')
app.use(express.static('./public'))
GRoute(app)

app.listen(process.env.PORTSITE)