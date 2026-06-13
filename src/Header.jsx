import React from "react";

function Header(){
    return(
        <div className="Header">
            <h1 className='logo'>NOX   PROFILE</h1>
            <ul className='header'>
                <li><a href="#">Home</a></li>
                <li><a href="#About">About</a></li>
                <li><a href="#Projects">Projects</a></li>
                <li><a href="#Experiance">Experience</a></li>
                <li><a href="#Contact">Contact</a></li>
            </ul>
        </div>
    );
}

export default Header;