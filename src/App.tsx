import React from 'react'
import logo from './logo.svg'
import Home1 from './views/Home1'
import Home2 from './views/Home2'
import './App.less'

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Hello Webpack 1
        </a>
        <Home1 />
        <Home2 username="Junes" />
      </header>
    </div>
  )
}

export default App
