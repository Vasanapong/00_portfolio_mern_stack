import { useState,useContext } from 'react'
import axios from 'axios'
import { UserLocalContext } from '../App'

const Register = () => {

    const {setUserDataLocal} = useContext(UserLocalContext)

    const [loginData, setLoginData] = useState({
        username:'',
        password:''
    })

    const handleLogin = (e) =>{
        e.preventDefault();
        axios.post('/login',loginData)
        .then(result=>{
            localStorage.setItem('userLocal',JSON.stringify(result.data))
            setUserDataLocal(result.data)
            window.location.href = '/'
        })
        .catch(err=>alert('Something Wrong!'))
    }

    return (
        <form  style={{maxWidth:500,margin:'auto',paddingTop:50,paddingLeft:20,paddingRight:20}} class="mt-3" onSubmit={handleLogin}>
            <p style={{textAlign:'center',fontSize:30}}>Login Form</p>
            <div class="form-group mb-3">
                <label>Username</label>
                <input 
                type="text" 
                class="form-control" 
                placeholder="Enter username"
                onChange={(e)=>setLoginData(prev=>{return{...prev,username:e.target.value.toLowerCase()}})}
                />
            </div>
            <div class="form-group mb-3">
                <label>Password</label>
                <input 
                type="password" 
                class="form-control" 
                placeholder="Enter password"
                autoComplete="off"
                onChange={(e)=>setLoginData(prev=>{return{...prev,password:e.target.value}})}
                />
            </div>
            <button type="submit" class="btn btn-success">Login</button>
        </form>
    )
}

export default Register;