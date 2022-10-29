import React from 'react'
import Sepereter from '../../comman/seperater/sepereter'
import { WorkData } from '../../data/work'
import "./work.css"
import Workcard from './workcard';

function Work() {
    const data = WorkData;
    

    return (
        <div className="work">
            <Sepereter/>
            
            <label className="section-title">Work</label>
            <div className="worklist">
                {data.map((item)=>{
                    return(
                        <Workcard item={item}/>
                    )
                })}
            </div>

        </div>
    )
}

export default Work;