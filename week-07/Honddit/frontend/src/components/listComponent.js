import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';

import componentStyle from './components.module.css';
import thunk from '../thunk/listThunk';
import OnePostComponent from './onePostComponent';

function ListComponent({state, getAllStories}) {
    useEffect(() => {
        getAllStories();
    }, []);

    return (
        <div className={componentStyle.listContainer}>
            {state.map(post => 
                <OnePostComponent post={post} key={'post'  + post.id}/>    
            )}
        </div>
    );
}

const mapStateToProps = (state) => ({
    state: state.listReducer
});

const mapDispatchToProps = dispatch => ({
    getAllStories: () => dispatch(thunk.getAllStories()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListComponent);
