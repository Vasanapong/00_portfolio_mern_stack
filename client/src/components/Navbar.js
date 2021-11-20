import { UserLocalContext } from "../App";
import { useContext } from "react";

const Navbar = () => {

    const { userDataLocal, setUserDataLocal, setIsToggle } = useContext(UserLocalContext)

    const handleLogout = () =>{
        localStorage.removeItem('userLocal')
        setUserDataLocal(null)
    }

    return (
        <nav class="navbar navbar-expand-sm navbar-dark bg-dark px-3" style={{position:'fixed',top:0,width:'100%',zIndex:2}}>
            <a class="navbar-brand" href="/">VC Academy</a>
            <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarToggle" onClick={()=>setIsToggle(prev=>!prev)}>
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarToggle">
                <div class="navbar-nav">
                    <a class="nav-item nav-link" href={userDataLocal ? "/myclass" : "/register"}>{userDataLocal? 'My Class' : 'Register'}</a>
                    <a class="nav-item nav-link" href={userDataLocal ? "/logout" : "/login"} onClick={userDataLocal ?  handleLogout : ''}>{userDataLocal? 'Logout' : 'Login'}</a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;