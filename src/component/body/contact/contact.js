import React from 'react'
import Sepereter from '../../comman/seperater/sepereter'
import SocialContact from '../../comman/social contanct'
import "./contact.css"

function Contact(props) {
    

    return (
        <div className="contact">
          <Sepereter />
          <label className="section-title">Contact</label>
          <div className="contactcontainer">
              <div className="contactleft">
                <p>If you want to get in touch.Contact me on any one of the platform </p>
                <SocialContact/>
              </div>
              <div className="download">
                  <a download href={require('../../../assets/Sagar_M(Resume).pdf').default}>
                  <i class="fi-rr-cloud-download download-icon"  ></i>Download Resumne</a>
              </div>
          </div>
        </div>
    )
}

export default Contact;