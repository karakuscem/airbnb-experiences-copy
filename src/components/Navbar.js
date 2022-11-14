import React from "react"
import logo from "../assets/logo.png"
import '../styles/styles.css';

export default function Navbar() {
    return (
        <nav>
            <img src={logo} alt="" className="nav--logo"/>
        </nav>
    )
}