import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import deleteIcon from './img/delete.svg';
import styles from 'styles/list';
import actions from 'actions/todo';

const icon = require('./img/delete.svg');

function DeleteIcon(props) {
    return (
        <TouchableOpacity onPress={() => props.deleteOneIssue(Number(props.id))}>
            <Image
                source={require('./img/delete.svg')}
                style={styles.deleteIcon}
                alt='delete icon'
            />
        </TouchableOpacity>
    );
}

const mapStateToProps = state => ({
    state
});

const mapDispatchToProps = dispatch => ({
    deleteOneIssue: (id) => dispatch(actions.deleteOneIssue(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(DeleteIcon);
