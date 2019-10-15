import React, { Fragment } from "./React";
import logo from './logo.png';
import './App.css';
import { JSXElement } from '@babel/types';

function App(): JSX.Element {
  return (
    <div className="App">
      <header className="App-header"
      style={{minHeight: "30vh", padding: "5vh", alignItems:"left", backgroundColor: "goldenrod"}}>
        <img src={logo} 
        style={{height: "20vh", width: "20vh", alignItems: "left"}}className="App-logo" alt="logo" />
        <p>
        Manage your job search easily! 
        </p>
      </header>
      <body>
        <Fragment>
          <h1>Jobs List</h1>
          <form>
            <label>Job title </label>
            <input type="text" required/>
            <br></br>
            <label>Company </label>
            <input type="text" required/>
            <br></br>
            <label>Associated Link </label>
            <input type="url" required/>
            <br></br>
            <label>Source </label>
            <select>
              <option value="Referral">Referral</option>
              <option value="Job Board">Job Board</option>
              <option value="Slack Channel">Slack Channel</option>
            </select>
            <br></br>
            <label><input type="checkbox" id="coverletter" name="coverletter"></input> Cover Letter Included (check if yes) </label>
            <br></br>
            <label> <input type="checkbox" id="resume" name="resume"></input> Resume Uploaded (check if yes) </label>
            <br></br>
            <label> <input type="checkbox" id="LinkedIn" name="LinkedIn"></input> LinkedIn Profile Used(check if yes) </label>
            <br></br>
            <button type="submit">Add Job Applied Info</button>
          </form>
          <button type="submit">Update Job Application Info</button>
      </Fragment>
    </body>
  </div>
    
  );
}

export default App;
