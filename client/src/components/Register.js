import { useState } from 'react'
import axios from 'axios'

const Register = () => {

    const [registerData, setRegisterData] = useState({
        username:'',
        email:'',
        password:''
    })

    const handleRegister = (e) =>{
        e.preventDefault();
        axios.post('/register',registerData)
        .then(window.location.href="/login")
        .catch(err=>alert('Something Wrong!'))
    }
    
    return (
        <form  style={{maxWidth:500,margin:'auto',paddingTop:50,paddingLeft:20,paddingRight:20}} class="mt-3" onSubmit={handleRegister}>
            <p style={{textAlign:'center',fontSize:30}}>Register Form</p>
            <div class="form-group mb-3">
                <label>Username</label>
                <input 
                type="text" 
                class="form-control" 
                placeholder="Enter username"
                onChange={(e)=>setRegisterData(prev=>{return{...prev,username:e.target.value.toLowerCase()}})}
                />
            </div>
            <div class="form-group mb-3">
                <label>Email</label>
                <input 
                type="email" 
                class="form-control" 
                placeholder="Enter email"
                onChange={(e)=>setRegisterData(prev=>{return{...prev,email:e.target.value.toLowerCase()}})}
                />
            </div>
            <div class="form-group mb-3">
                <label>Password</label>
                <input 
                type="password" 
                class="form-control" 
                placeholder="Enter password"
                autoComplete="off"
                onChange={(e)=>setRegisterData(prev=>{return{...prev,password:e.target.value}})}
                />
            </div>
            <button type="submit" class="btn btn-primary">Register</button>
        </form>
    )
}

export default Register;