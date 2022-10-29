import React from 'react'
import { SocialData } from '../../data/social';
import "./social.css"

function SocialContact() {
    const data = SocialData;

    return (
      <div className="socialcontact">
         {data.map((item)=>{
             return(
                 <a href={item.link}>
                     <div className="socialicon">
                        <img src={item.icon} className="socialicons"/>
                     </div>

                 </a>
             )
         })}

      </div>
    )
}

export default SocialContact;