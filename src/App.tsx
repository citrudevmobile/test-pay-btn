import React from "react";
import logo from "./logo.svg";
import "./App.css";

import PayBtn from "./PayBtn";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <PayBtn amount={100} userID="jkahsdjkahjksdh" />
      </header>
    </div>
  );
}

export default App;
