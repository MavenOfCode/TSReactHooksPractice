import React, { Fragment } from 'react';
import logo from './logo.png';
import './App.css';
import { JSXElement } from '@babel/types';

function App(): JSX.Element {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        Manage your job search easily! 
        </p>
      </header>
      <body>
        <Fragment>
          <h1>Jobs List</h1>
          <form>
            <input type="text" required/>
            <button type="submit">Add Job Info</button>
          </form>
      </Fragment>
    </body>
  </div>
    
  );
}

export default App;
