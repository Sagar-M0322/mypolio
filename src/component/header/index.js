import React, { useState } from 'react';
import "./header.css";
import Mobile from './mobile/mobile';
import Web from './web/web';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Header() {
    const [isOpen, setIsopen]= useState(false);
    

    return (
        <div className="Header">
            <div className="Logo">PortFolio</div>
            <div className="menu">
                <div className="webmenu">
                    <Web/>
                    </div>
                <div className="mobilemenu">
                    <div onClick={() => setIsopen(!isOpen)}>
                        <i class="fi-rr-apps menu-icon"></i>
                    </div>
                    {isOpen && <Mobile isOpen={isOpen} setIsopen={setIsopen} />}
                </div>
            </div>
            
        </div>
    );
}

export default Header;