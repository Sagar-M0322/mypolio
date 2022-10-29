import React from 'react';
import "./skillcard.css";

function Skillcaed({skill}) {
    

    return (
        <div className="skillcard">
            <div className="skillicon">{skill.icon}</div>
            <label className="skillname">{skill.name}</label>
        </div>
    );
}

export default Skillcaed;