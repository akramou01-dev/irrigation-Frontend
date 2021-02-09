import React, { Component } from "react";
import {Switch , Route} from 'react-router-dom'

// importing components
import Layout from "./Hoc/Layout/Layout";
import Home from "./Containers/Home/Home";
import Services from "./Containers/Services/Services"; 
import About from "./Containers/About/About"; 



class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path='/services' component={Services} />
          <Route exact path='/about' component={About} />
        </Switch>
      </Layout>
    );
  }
}
export default App;