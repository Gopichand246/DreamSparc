import React from 'react'
import './style.css'
import team2 from '../../images/team2.jpg'
import team1 from '../../images/team1.jpg'
import team3 from '../../images/team3.png'
import team4 from '../../images/team4.jpg'

const Team = props => {
    return (
        <div className="team"> <br/> <br/>
            <span className ="icon"> <b> TEAM </b> </span> <br/> <br/>
            <b> Our Hardworking <span className = "icon-txt"> Team </span></b> <br/>
            <span className = "text"> 
            Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita 
            at voluptas atque vitae autem. <br/> <br/></span>
            <div className ="images">
                <div className="team-img">
                    <img src= {team2} width="100%"height="350cm"/> 
                    <div class = "img-text"> <b>Gojo Satoru </b> <br/> <span className ="img-text-i">Jujutsu superior </span> </div>
                </div>
                <div className="team-img">
                    <img src= {team1} width="100%"height="350cm"/> 
                    <div class = "img-text"> <b>Ryomen Sukuna </b> <br/> <span className ="img-text-i"> King of Curses </span> </div>
                </div>
                <div className="team-img">
                    <img src= {team3} width="100%"height="350cm"/> 
                    <div class = "img-text"> <b>Rengoku Kyojuro </b> <br/> <span className ="img-text-i"> Fire God </span> </div>
                </div>
                <div className="team-img">
                    <img src= {team4} width="100%"height="350cm"/> 
                    <div class = "img-text"> <b>Levi Ackerman </b> <br/> <span className ="img-text-i"> BeyBlade MF </span> </div>
                </div>
            </div>
        </div>
    )
}

export default Team;
