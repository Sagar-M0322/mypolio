import React from 'react'
import About from './about/about';
import "./body.css";
import Contact from './contact/contact';
import Project from './projrcts/project';
import Skills from './skills/skills';
import Work from './work/work';

function Body(props) {
    

    return (
        <div className="body">
           <section id='about'>
               <About/>
           </section>
           <section id='project'>
               <Project/>
           </section>
           <section id='skills'>
               <Skills/>
           </section>
           <section id='Work'>
               <Work/>
           </section>
           <section id='Contact'>
               <Contact/>
           </section>
        </div>
    )
}

export default Body;