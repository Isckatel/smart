import './App.css';
import {Route} from "react-router-dom";
import Login from "./components/Login/Login";
import Profile from "./components/Profile/Profile";

function App(props) {
  return (
    <div className="App">
      <Route exact path='/' render = {()=><Login login={props.state.login} dispatch={props.dispatch} />}/>
      <Route path='/profile' render = {()=><Profile login={props.state.login} dispatch={props.dispatch} />}/>
    </div>
  );
}

export default App;
