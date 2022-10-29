import React from 'react'
import Sepereter from '../../comman/seperater/sepereter'
import { SkillData } from '../../data/Skills'
import Skillcaed from './skillcaed';
import "./skills.css"

function Skills() {
    const data = SkillData;

    return (
       <div className="skills">
           <Sepereter/>
           <label className="section-title">Skills</label>
            <div className= "skillscont">
                {data.map((item) =>{
                    return(
                        <div className="skillsection">
                            <label className="skillsectiontit">{item.type}</label>
                            <div className="skillslist">
                                {item.list.map((skill)=>{
                                    return(
                                        <Skillcaed skill={skill} />
                                    )
                                     
                                })}
                            </div>
                        </div>
                    )
                })}
            </div>
       </div>
    )
}

export default Skills;