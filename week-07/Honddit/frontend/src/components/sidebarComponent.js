import React from 'react';
import { Link } from "react-router-dom";

import componentStyle from './components.module.css';

function SidebarComponent() {
    return (
        <div className={componentStyle.sidebarContainer}>
            <Link to='/submit' className={componentStyle.link}>
                <div className={componentStyle.submitButton}>SUBMIT A NEW POST</div>
            </Link>
        </div>
    )
}

export default SidebarComponent;
