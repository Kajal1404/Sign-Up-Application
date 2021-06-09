const express = require('express')
const router = express.Router() 
 //Import SignUpModels Schema file here
 const signUpTemplateCopy = require('../models/SignUpModels')

 router.post('/signup', (request, response) =>{
    //New variable assigned to signUpTemplateCopy(new schema) 
    const signedUpUser = new signUpTemplateCopy({
        fullName:request.body.fullName,
        userName:request.body.userName,
     
    })
    signedUpUser.save()
    .then(data => {
        response.json(data)
    })
    .catch(error =>{
        response.json(error)
    })
 })

 module.exports = router
