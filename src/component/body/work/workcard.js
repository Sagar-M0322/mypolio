import React from 'react'
import "./workcard.css"

function Workcard({item}) {
    

    return (
        <div className="workcard">
            <img src={item.campanylogo} className="worklogo"/>
            <div className="workinfo">
                <label className="companyname">{item.company}</label>
                <div className="workdates">
                    From:-<label>{item.dataOfJoin} To:-</label><label>{item.dateOfEnd}</label>
                </div>
                <div className="workdes">
                    <p>{item.description}</p>
                </div>
            </div>
        </div>
    )
}

export default Workcard;