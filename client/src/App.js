import { useState } from 'react';
import './App.css';
import JoinGame from './components/JoinGame';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Cookies from "universal-cookie";


function App() {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <div className="App">
          <button 
            className='LogOut'
            onClick={()=>{setIsAuth(false)}}
            
          >LogOut</button>
          {isAuth===true ?(
            <JoinGame/>
          ):(
                <>
                <p>THIS IS THE HOME PAGE</p>
                <Login setIsAuth={setIsAuth}/>
                <SignUp setIsAuth={setIsAuth}/>
                </>
          )}
    </div>
  );
}

export default App;
