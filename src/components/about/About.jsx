import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import paly_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
    return (
        <div className='about'>
            <div className="about-left">
                <img src={about_img} alt="" className='about-img'/>
                <img src={paly_icon} alt="" className='play-icon' onClick={() => setPlayState(true)} />
            </div>
            <div className="about-right">
                <h3>ABOUT UNIVERSITY</h3>
                <h2>Nurturing Tomorrow's Leaders Today</h2>
                <p>
                    Our university is committed to shaping a brighter future by empowering students 
                    with knowledge, skills, and values that transcend the classroom. Through a diverse
                    and inclusive learning environment, we cultivate critical thinking, creativity,
                    and leadership—qualities essential for success in today’s rapidly evolving world.
                </p> 
                <p>
                    With a faculty of distinguished scholars and industry professionals, 
                    we blend academic excellence with real-world experience.
                    Our programs are designed to prepare students for global challenges,
                    equipping them with the tools needed to thrive across various disciplines and professions.
                    Every course is a step toward building confident, responsible, and innovative leaders.
                </p> 
            </div>  
        </div>
    )
}

export default About