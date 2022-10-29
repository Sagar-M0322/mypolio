import React from 'react';
import "./web.css";

function Web () {
    

    return (
        <div className="Web">
            <div className="weboption">
                <a href="#project">
                    <i class="fi-rr-edit-alt optionicon"></i>Project
                </a>
            </div>
            <div className="weboption">
                <a href="#skills">
                    <i class="fi-rr-laptop optionicon"></i>Skills
                </a>
            </div>
            <div className="weboption">
                <a href="#Work">
                <i class="fi-rr-briefcase optionicon"></i>Work
                </a>
            </div>
            <div className="weboption">
                <a href="#Contact">
                <i class="fi-rr-user optionicon"></i>Contact
                </a>
            </div>
        </div>
    )
}

export default Web;