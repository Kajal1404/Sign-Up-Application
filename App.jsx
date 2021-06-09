import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios'

class App extends Component {
    constructor() {
        super()
        this.state = {
            fullName: '',
            userName: ''
        }
        this.changeFullName = this. changeFullName.bind(this)
        this.changeUserName = this. changeUserName.bind(this) 
        this.onSubmit = this.onSubmit.bind(this)
    }
    changeFullName(event){
        this.setState({
            fullName:event.target.value
        })
    }
    changeUserName(event){
        this.setState({
            userName:event.target.value
        })
    }
    //We have to call this event
    //event.preventDefault prevents the form to act in default way.
    //Default way means when u submit form application refreshes.
 
    onSubmit(event){
       event.preventDefault()

       const registered = {
           fullName: this.state.fullName,
           userName: this.state.userName
       }
//It send data to backend
       axios.post('http://localhost:4000/app/signup', registered)
       .then(response => console.log(response.data))

//Return Sign Up form to frontend
   this.setState({
        fullName:'',
        userName:''

   }) 
   }
    render() {
        return(
            <div>
                <div className='container'>
                    <div className='form-div'>
                        <form onSubmit = {this.onSubmit}>
                            <input type= 'text'
                             placeholder= 'Full Name'
                             onChange={this.changeFullName}
                             value={this.state.fullName}
                             className='form-control form-group'
                             />

                             <input type= 'text'
                             placeholder= 'User Name'
                             onChange={this.changeUserName}
                             value={this.state.userName}
                             className='form-control form-group'
                             />

                            <input type= 'submit' className='btn btn-danger btn-block' value='Submit'/>
                        </form>
                    </div>
                </div>
            </div>
        );

    }
}

export default App;
