import React from "react";
import logo from "./logo.png";

type Props = {
    style: {
        height: "20vh";
        width: "20vh";
        alignItems: "left";
        className: "App-logo";
        alt: "logo"
    }
    img: src
}
export function Logo (img: Props){
  return(
    <Logo >
        {img}
    </Logo>
  )
}