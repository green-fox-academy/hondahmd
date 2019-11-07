import React from 'react';
import { connect } from 'react-redux';

import thunk from 'thunk/listThunk';
import componentStyle from './components.module.css';
import deleteIcon from './delete.svg';

function DeletePostComponent(props) {
    function handleClick(event) {
        if (event.target.name === 'table') props.deleteOnePost(props.id);
    }

    return (
        <div className={componentStyle.deleteTableContainer}>
            <img src={deleteIcon} className={componentStyle.deleteIcon} onClick={handleClick} name='table' alt='delete table'/>
        </div>
    );
}

const mapStateToProps = state => ({
    state: state
});
 
const mapDispatchToProps = dispatch => ({
    deleteOnePost: (id) => dispatch(thunk.deleteOnePost(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(DeletePostComponent);
