import logo from "./logo.svg";
import "./App.less";
import React from "react";
import Test from './views/Test/index.jsx'

const  App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hello Webpack
        </a>
        <Test />
      </header>
    </div>
  );
}

export default App;
