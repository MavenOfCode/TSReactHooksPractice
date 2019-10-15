import React from 'react';
import Logo from "./components/logo";
import logo from "./logo.png"

export function Header() {
    return(
        <Header
        className="App-header"
      style={{minHeight: "30vh", padding: "5vh", alignItems:"left", backgroundColor: "goldenrod"}}>

       <Logo src={logo}></Logo>
        <p>
        Manage your job search easily! 
        </p>

        </Header>

    )
}