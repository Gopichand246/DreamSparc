import React from 'react'
import about from '../../images/about.jpg'
import './style.css'

const About = props => {
    return (
        <div className="about"> <br/> <br/>
            <span className ="icon"> <b> ABOUT </b> </span> <br/> <br/>
            <b>Find Out More <span className = "about-i"> About Us </span></b> <br/> <br/>
            <div className ="about-txt">
            <img src={about} className ="about-img"/>
            <div className ="about-text-p">
            <b>Voluptatem dignissimos provident quasi corporis voluptates sit</b> <br/> <br/>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br/> tempor incididunt ut
            labore et dolore magna aliqua.
            </div>

            </div>
        </div>
    )
}

export default About;
