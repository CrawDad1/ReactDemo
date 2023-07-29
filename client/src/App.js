import './App.css';
import Login from './components/Login';
import SignUp from './components/SignUp'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        THIS IS THE HOME PAGE
        <Login/>
        <SignUp/>
        <button>Launch Game</button>
      </header>
    </div>
  );
}

export default App;
