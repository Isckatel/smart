import './App.css';
import {Route} from "react-router-dom";
import Login from "./components/Login/Login";
import Profile from "./components/Profile/Profile";

function App(props) {
  return (
    <div className="App">
      <Route exact path='/' render = {()=><Login />}/>
      <Route path='/profile' render = {()=><Profile />}/>
    </div>
  );
}

export default App;
