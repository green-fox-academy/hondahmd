import React from 'react';

import deleteIcon from './delete.svg';
import undoneIcon from './undone.svg';
import doneIcon from './done.svg';
import todoListStyle from './todolist.module.css';

const _ = require('lodash');

class TodoList extends React.Component {
    constructor() {
        super();
        this.state = {};
        this.domain = 'http://dark-blood-74845.herokuapp.com/api/todos/';
        this.addIssue = this.addIssue.bind(this);
        this.setIssue = this.setIssue.bind(this);
        this.deleteIssue = this.deleteIssue.bind(this);
    }

    componentWillMount() {
        fetch(this.domain)
            .then(response => response.json())
            .then(data => { this.setState(data) });
    }

    deepCopyState() {
        return _.cloneDeep(this.state)
    }

    addIssue() {
        let inputIssue = document.getElementsByClassName('input-box')[0].value;
        if (inputIssue.length < 3) {
            alert("issue name must be longer than 3 characters!");
            document.getElementsByClassName('input-box')[0].value = '';
            return;
        }
        let copyState = _.cloneDeep(this.state);
        const keys = Object.keys(this.state);
        const newIndex = Number(keys[keys.length - 1]) + 1;
        copyState[newIndex] = {
            Id: newIndex,
            Text: inputIssue,
            Done: 0
        }
        this.setState(copyState);
        fetch(this.domain, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: {
                'Text': inputIssue
            }
        })
            .then(response => response.json())
            .then(data => console.log(data));
    }

    setIssue(event) {
        let copyState = _.cloneDeep(this.state);
        const setId = event.target.id.split(' ')[0];
        copyState[setId]['Done'] = !this.state[setId]['Done'];
        this.setState(copyState);
    }

    deleteIssue(event) {
        const deleteId = Number(event.target.id.split(' ')[0]);
        let copyState = _.cloneDeep(this.state);
        delete copyState[deleteId];
        console.log(copyState);
        this.setState(copyState);
    }

    render() {
        return (
            <>
                <div className="input-container">
                    <input type="text" className="input-box" />
                    <button type="submit" className="input-button button-text" onClick={this.addIssue}>Add</button>
                </div>
                <ul className="list-container todo-item">
                    {Object.keys(this.state).map(issue =>
                        <li className={todoListStyle.issueLine} key={issue}>{this.state[issue].Text}
                            <div className={todoListStyle.iconContainer}>
                                <img src={deleteIcon} className={todoListStyle.deleteIcon} onClick={this.deleteIssue} id={issue + ' delete'} alt='delete icon' />
                                <img src={this.state[issue].Done ? doneIcon : undoneIcon} className={todoListStyle.doneIcon} onClick={this.setIssue} id={issue + ' done'} alt='finish icon' />
                            </div>
                        </li>
                    )}
                </ul>
            </>
        );
    }
}

export default TodoList;
