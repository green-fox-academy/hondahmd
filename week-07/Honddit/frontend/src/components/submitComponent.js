import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

import componentStyle from './components.module.css';
import thunk from 'thunk/submitThunk';

function SubmitComponent({state, submitPost}) {
    let [input, setInput] = useState({ title: '', url: '' });

    function handleInput(event) {
        if (event.target.name === 'title') {
            setInput({
                ...input,
                title: event.target.value
            });
        } else if (event.target.name === 'url') {
            setInput({
                ...input,
                url: event.target.value
            });
        }
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
