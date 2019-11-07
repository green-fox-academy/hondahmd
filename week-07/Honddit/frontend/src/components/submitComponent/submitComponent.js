import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

import componentStyle from './components.module.css';
import thunk from 'thunk/submitThunk';

function SubmitComponent({state, submitPost}) {
    let [input, setInput] = useState({ title: '', url: '' });

    function handleInput(event) {
        let newInput = { ...input };
        newInput[event.target.name] = event.target.value;
        setInput({ ...newInput });
    }

    function handleSubmit(event) {
        if (event.target.name === 'submit') {
            submitPost(input);
        }
    }

    return (
        <form className={componentStyle.submitFormContainer}>
            <div className={componentStyle.submitInputContainer}>
                <div className={componentStyle.submitTitleContainer}>
                    <p className={componentStyle.submitFormFont}>TITLE</p>
                    <input name="title" onChange={handleInput} className={componentStyle.titleInput}/>
                </div>
                <div>
                    <p className={componentStyle.submitFormFont}>URL</p>
                    <input name="url" onChange={handleInput} className={componentStyle.urlInput}/>
                </div>
            </div>
            <Link to='/' className={componentStyle.link}>
                <button name='submit' onClick={handleSubmit} className={componentStyle.submitFormButton}>SUBMIT</button>
            </Link>
        </form>
    );
}

const mapStateToProps = state => ({
    state: state
});

const mapDispatchToProps = dispatch => ({
    submitPost: (data) => dispatch(thunk.submitPost(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(SubmitComponent);
