import React from 'react'
import "./mobile.css";

function Mobile({isOpen,setIsopen}) {
     return (
       <div className="mobile">
           <div className="closeicon" onClick={() => setIsopen(!isOpen)}>
                <i class="fi-rr-cross-circle"></i> 
           </div>
           <div className="mobileoptions">
                <div className="mobileoption">
                    <a href="#project">
                        <i class="fi-rr-edit-alt optionicon"></i>Project
                    </a>
                </div>
                <div className="mobileoption">
                    <a href="#skills">
                        <i class="fi-rr-laptop optionicon"></i>Skills
                    </a>
                </div>
                <div className="mobileoption">
                    <a href="#Work">
                    <i class="fi-rr-briefcase optionicon"></i>Work
                    </a>
                </div>
                <div className="mobileoption">
                    <a href="#Contact">
                    <i class="fi-rr-user optionicon"></i>Contact
                    </a>
                </div>
           </div>
       </div>
    );
}

export default Mobile