import express from 'express' 
const Routes = express.Router()

import { ContactControllers, isAdmin, ContactData } from '../Controllers/user.Controller.js'
import  {RequireSignIn} from '../Middlewares/AuthMiddleware.js'


Routes.post('/contact', ContactControllers)
Routes.post('/login' ,isAdmin)

Routes.get('/admin-auth', RequireSignIn , (req, res)=> {
    res.status(200).send({ok:true})
})
Routes.get('/auth-data', ContactData)





export default Routes