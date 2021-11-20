import './App.css';
import Navbar from './components/Navbar';
import { Switch, Route } from 'react-router-dom'
import Register from './components/Register';
import Login from './components/Login'
import { createContext, useState } from 'react';
import Homepage from './components/Homepage';
import MyClass from './components/Myclass';
import Showclass from './components/Showclass';

const UserLocalContext = createContext();

function App() {

  const [userDataLocal,setUserDataLocal] = useState(()=>{
    let initial = JSON.parse(localStorage.getItem('userLocal'))
    return initial || "";
  })

  const [isToggle, setIsToggle] = useState(false)

  return (
    <UserLocalContext.Provider value={{userDataLocal,setUserDataLocal, isToggle, setIsToggle}}>
      <div className="App">
        {isToggle ? <div className="blankpage"></div> : ''}
        <Navbar />
        <Switch>
        <Route path="/" exact>
            {userDataLocal ? <Homepage/> : <Register />}
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/myclass">
            <MyClass/>
          </Route>
          <Route path="/showclass/">
            <Showclass/>
          </Route>
        </Switch>
      </div>
    </UserLocalContext.Provider>
  );
}

export { UserLocalContext }
export default App;
