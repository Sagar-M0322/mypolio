import React from 'react'
import Sepereter from '../../comman/seperater/sepereter';
import { Projectdata } from '../../data/projects';
import "./project.css"
import Projectcard from './projectcard';

function Project() {
    const data = Projectdata

    return (
        <div className="projects">
            <Sepereter/>
            <label className="section-title">Project</label>
            <div >
                {data.map((project) => {
                    return<Projectcard project={project}/>;
                }
                )}
            </div>
        </div>
    )
}export default Project;