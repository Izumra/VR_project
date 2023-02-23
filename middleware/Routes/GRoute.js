import HomePage from './HomePage.js'

const groute=(app)=>{
    app.use('/',HomePage)
}

export default groute