import React from 'react';

import componentStyle from './components.module.css';
import ListComponent from './listComponent';
import SidebarComponent from './sidebarComponent';

function MainComponent() {
    return (
        <div className={componentStyle.mainContainer}>
            <ListComponent />
            <SidebarComponent />
        </div>
    );
}

export default MainComponent;
