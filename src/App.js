import logo from './logo.svg';
import './App.css';

import Post from './component/PostRequest';

import TableData from './component/Forms/GetRequest';
import EditData from './component/EditRequest'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function App() {

  return (
    <div className="App">
     



   <EditData></EditData>
    {/* <Switch>
    <Route exact path="/" component={TableData}></Route>
        <Route exact path="/post" component={Post}></Route>
    </Switch> */}

    </div>
  );
}

export default App;
