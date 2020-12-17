import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  BrowserRouter,
} from "react-router-dom";



//? redux
// import { Provider } from "react-redux";
// import { PersistGate } from "redux-persist/integration/react";

import Header from "./components/Header/Header.jsx";
import Home from "./components/Home/Home.jsx";


function App() {
  return (
    //? here will be the route of our web page 
     <BrowserRouter>
       <Switch>
        <Route path='/header' component={Header} />
        <Route path='/home' component={Home} />

       </Switch>
     </BrowserRouter>
  
  );
}

export default App;
