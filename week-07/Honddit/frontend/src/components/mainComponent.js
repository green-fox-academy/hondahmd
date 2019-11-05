import React from 'react';

import componentStyle from './components.module.css';
import ListComponent from './listComponent';

function MainComponent() {
    return (
        <div className={componentStyle.mainContainer}>
            <ListComponent />
        </div>
    );
}

export default MainComponent;
