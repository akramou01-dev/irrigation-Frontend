import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

//? redux
import { Provider } from "react-redux";
import { store, persistor } from "./store.js";
import { PersistGate } from "redux-persist/integration/react";


function App() {
  return (
    //? here will be the route of our web page 
    <provider>
      
    </provider>
  );
}

export default App;
