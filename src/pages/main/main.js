import React from 'react'
import './main.css'

import Hacker from '../../assets/Hacker.png'
import HackerPC from '../../assets/HackerPC.png'
import HackerTable from '../../assets/HackerTable.png'
import ReactJS from '../../assets/react.png'
import Kuber from '../../assets/kuber.png'
import Html5 from '../../assets/html5.svg'
import Github from '../../assets/github.png'
import Logo from '../../assets/logo.png'
import LogoWhite from '../../assets/logoWhite.png'
import liveIcon from '../../assets/live.svg'

import ProfessionalBG from '../../assets/ProfessionalBG.svg'
import Professional1 from '../../assets/Professional1.svg'
function student() {

   
    window.location.href="https://maverick.codeasylums.com/";
    }
    function prof() {

   
        window.location.href="https://ace.codeasylums.com/";
        }
const Main = () => {
   
    return(
        
        <div className="landing-container">
            <div className="intersection"></div>
            <div className="glass"></div>
            <div className="fix"></div>
            <div className="topLogo">
                <img className="topLogoBlack" src={Logo} alt="Logo" />
                <img className="topLogoWhite" src={LogoWhite} alt="LogoWhite" />
            </div>
            <div className="landing-left">
                <div className="landing-left-text">
                    <p>Student?</p>
                    <p>Maverick Coder</p>
                    {/* <p>have a knack for tech?<br></br>want to crack interviews?</p>*/}
                     {/*<p>Give us and yourself some time and secure your dream job</p>*/}
                    <button className="landing-left-button" onClick={student}>Let’s play & code</button>
                    
                    <div className="event">
                        <div className="spinner"></div>
                        <img className="highImage" src={liveIcon} alt="Icon" />
                        <p className="eventText">Asy~namite Hackathon</p>
                    </div>
                    
                </div>
                <img className="Main" src={Hacker} />
                <img className="Decor" src={HackerPC} alt="Decor" />
                <img className="Table" src={HackerTable} />
                
                <img className="ReactJS" src={ReactJS} alt="Decor" />
                <img className="Kuber" src={Kuber} alt="Decor" />
                <img className="HTML5" src={Html5} alt="Decor" />
                <img className="Github" src={Github} alt="Decor" />
                <img className="Logo" src={Logo} alt="CodeAsylums" />
                <img className="LogoWhite" src={LogoWhite} alt="CodeAsylums" />
            </div>
            <div className="landing-right">
                <div className="landing-right-absolute">
                    
                </div>
                <div className="landing-right-text">
                    <p>Professional?</p>
                      <p>Ace Developer</p>
                     {/* <p>Want to improve your skills? <br></br> Crack the Coding Interview?</p>*/}
                   
                   {/* <p>Jumpstart with professional courses from CodeAsylums online Bootcamp</p>*/}
                    <button className="landing-right-button" onClick={prof}>Let’s plan a career transformation</button>
                    
                </div>
                <div className="intersectionRight"></div>
                <img className="Decor" src={ProfessionalBG} alt="Decor" />
                <img className="Main" src={Professional1} alt="Main" />
                <div className="intersectionRight"></div>
                
                {/* <img className="Docker" src={Docker} alt="Decor" /> */}
                {/* <img className="Ansible" src={Ansible} alt="Decor" />
                <img className="Circle4" src={Circle} alt="Decor" /> */}
            </div>
            <div className="main-bottom-text">
                <p>A learning ride to <span>import</span> you into the world of programming</p>
            </div>
            <div className="main-bottom-text-right">
                <p><span>Bootstrap</span> yourself into coding with courses especially tailored for working professionals</p>
            </div>
    </div>
    
    )
}

export default Main