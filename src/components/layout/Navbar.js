import { Component } from "react"
import React from "react"
//import { Link } from "react-router-dom";
import { Link } from "react-router-dom";

const NavBar =({icon,title})=>
{
    return(
        <nav className="navbar bg-primary">
            <h1>
                <i className={icon}/>  {title} </h1>
                <ul>
                    <li>
                       <a href='/'>Home</a>
                    </li>
                    <li>
                        <a href='/about'>About</a>
                    </li>
                </ul>
        </nav>
    );   
};
NavBar.defaultProps={
    title:"Github Finder",
    icon:"fab fa-github"
};
export default NavBar;