import React from 'react';
import {
    BrowserRouter as Router,
    Switch, 
    Route
} from 'react-router-dom';

import indexStyle from './indexStyle.module.css';
import HeaderComponent from './mainComponent/headerComponent';
import MainComponent from './mainComponent/mainComponent';
import SubmitComponent from './submitComponent/submitComponent';

function indexComponent() {
    return (
        <>
            <div className={indexStyle.container}>
                <HeaderComponent />
                <Router>
                    <Switch>
                        <Route exact path='/'><MainComponent /></Route>
                        <Route path='/submit'><SubmitComponent /></Route>
                    </Switch>
                </Router>
            </div>
        </>
    );
}

export default indexComponent;
