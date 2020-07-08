import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import { NavBar } from "../components";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <NavBar />
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

export default App;
