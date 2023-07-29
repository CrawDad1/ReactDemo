import './App.css';
import JoinGame from './components/JoinGame';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Cookies from "universal-cookie";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        THIS IS THE HOME PAGE
        <Login/>
        <SignUp/>
        <JoinGame/>
      </header>
    </div>
  );
}

export default App;
