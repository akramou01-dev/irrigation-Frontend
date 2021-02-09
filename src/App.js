import React, { Component } from "react";
import Layout from "./Hoc/Layout/Layout";
import Home from "./Containers/Home/Home";

class App extends Component {
  render() {
    return (
      <Layout>
        <Home />
      </Layout>
    );
  }
}
export default App;
