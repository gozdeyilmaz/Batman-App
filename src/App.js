import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Header} from "./component";
import { Link } from "react-router-dom";
import Main from "./container/Main";

function App(props) {
  return (
    <div className="App">
      <Link to = "/">
      <Header />
      </Link>
      
      
      <Main />
    </div>
  );
}

export default App;
