import React from 'react';
import bgimage from '../../images/bgimage.jpg'
import {BiPlayCircle} from "react-icons/bi"
import arts from '../../images/arts.jpeg'
import music from '../../images/music.jpg'
import sports from '../../images/sports.jpg'
import vocab from './vocab.jpg'
import 'react-sticky-header/styles.css'
import './style.css'
import About from '../pages/about';
import Team from '../pages/team';
import Contact from '../pages/contact';

const Hero = props => {
    
    return (
        <div className= "Hero">
            <div className = "body">
                <div className ="image">
                    <img src={bgimage} width="100%" height="600cm" />
                </div>
                <div className = "imageText">
                    <h1> <span className="imageTitle">DreamSparc </span> </h1>
                    <p>Unveils the real talent in U!</p>
                    <div className ="demo">
                        <div className = "imageDemo"> <a href="#"> GET STARTED </a> </div>
                        <div className = "videoDemo"> <a href="#"> <BiPlayCircle/> WATCH VIDEO</a> </div>
                    </div>
                </div>
                <h1> Check out what we offer</h1>
                <div className="category">
                    <div className = "music"> <a href="#"> <img src ={music} width = "100%" height= "100%" /> 
                        <div className = "overlay"> <div className = "Text"> MUSIC </div></div> </a>
                     </div>
                    <div className = "arts"> <a href="#"> <img src ={arts} width = "100%" height= "100%" />  
                        <div className = "overlay"> <div className = "Text"> ARTS </div></div> </a>
                    </div>
                    <div className = "sports"> <a href="#"> <img src ={sports} width = "100%" height= "100%"/> 
                        <div className = "overlay"> <div className = "Text"> SPORTS </div></div> </a>
                    </div>
                    <div className = "vocab"> <a href="#"> <img src ={vocab} width = "100%" height= "100%"/>   
                        <div className = "overlay"> <div className = "Text"> VOCABULARY </div></div> </a>
                    </div>
                </div>
                <div id="aboutNav"> <About/> </div>
                <div id="teamNav" > <Team/> </div>
                <div id="contactNav"> <Contact/> </div>
            </div>
        </div>
        
    )
}



export default Hero;
