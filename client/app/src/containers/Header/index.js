import React from 'react'
import {Link} from 'react-scroll'
import icon from './icon.ico'
import './style.css'

const Header = props => {

    return (
        <div className = "Header">
            <div className="title">
                <h1> <img src={icon}/> DreamSparc</h1>
            </div>
            <div className= "titleMenu">
                <a href="#"> Home </a>
                <a href ="/login"> Login </a>
                <Link to = "aboutNav" smooth={true} spy={true} duration={1000}>About</Link>
                <Link to = "contactNav" smooth={true} spy={true} duration={1000}>Contact</Link>
                <a href="#"> Hire </a>
                <Link to = "teamNav" smooth={true} spy={true} duration={1000}> Team </Link>
            </div>
        </div>
    )
}
export default Header;
