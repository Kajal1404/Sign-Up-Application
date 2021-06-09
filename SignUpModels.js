//Import mongoose
const mongoose = require('mongoose')
//Schema
const signUpTemplate = new mongoose.Schema({
    fullName:{
        type:String,
        required:true
    },
    userName:{
        type:String,
        required:true
    },
    //Date is seen at backend, everyitme user signs in the application 
    date:{
        type:Date,
        default:Date.now
    }

})
//           mytable is name of table from mongodb and signUpTemplate is name of Schema
module.exports = mongoose.model('mytable', signUpTemplate)
