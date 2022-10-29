import React from 'react'
import "./Projectcard.css"

function Projectcard({project}) {
    

    return (
        <div className="projectcard">
            <div className="projectinfo">
                <label className="projecttitle">{project.title}</label>
                <div className="projectlinks">
                    {project.demo && <a className="projectlink" href={project.demo}>
                       <div className="linkbutton">
                            <i class="fi-rr-globe"></i>Demo 
                        </div> 
                    </a>}
                    {project.github && <a className="projectlink" href={project.github}>
                       <div className="linkbutton">
                            <i class="devicon-github-original-wordmark colored"></i>Github 
                        </div> 
                    </a>}
                </div>
                <p>{project.about}</p>
                <div className="projecttags">
                    {project.tags.map((tags) => {
                        return <lable className="tag">{tags}</lable>;
                    })}
                </div>
            </div>
            <img src={project.image} className="projectimg"/>
        </div>
    )
}

export default Projectcard;