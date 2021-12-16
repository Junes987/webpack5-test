import logo from "./logo.svg";
import "./App.less";
import React from "react";
import Home1 from './views/Home1/index.jsx'
import Home2 from './views/Home2/index.tsx'

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
        <Home1 />
        <Home2 username="Junes"/>
      </header>
    </div>
  );
}

export default App;
