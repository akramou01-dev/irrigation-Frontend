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
import Service from "./components/Service/Service.jsx";
import About from "./components/Aboutus/About.jsx"

function App() {
  return (
    //? here will be the route of our web page 
     <BrowserRouter>
       <Switch>
        <Route path='/header' component={Header} />
        <Route path='/home' component={Home} />

        <Route path='/service' component={Service} />
        <Route path='/about' component={About} />
       </Switch>
     </BrowserRouter>
  
  );
}

export default App;
