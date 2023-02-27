import HomePage from './HomePage.js'
import Auth from './Auth.js'
import Admin from './Admin.js'

const groute=(app)=>{
    app.use('/',HomePage)
    app.use('/auth',Auth)
    app.use('/admin',Admin)
}

export default groute