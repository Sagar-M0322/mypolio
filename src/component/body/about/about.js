import React from 'react'
import SocialContact from '../../comman/social contanct'
import "./about.css"

function About() {
    return (
        <div className="about">
            <div className="abouttop">
                <div className="aboutinfo">
                    Hi this is <span className="name">Sagar</span>
                    <br/> I'm a tech lover who love to develop and 
                    <br/>take new challenges in learing new technologies.
                    <br/>Very much intrested in cloud technologies and devops tools.
                </div>
                <div className="aboutphoto">
                    <img src={require('../../../assets/mypic.jpg').default} 
                    className='picture'/>
                </div>
            </div>
            <div className="aboutbtm"> 
                <SocialContact/>
            </div>
        </div>
    );
}

export default About;