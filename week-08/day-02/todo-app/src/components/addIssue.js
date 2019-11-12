import React, {useState} from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import {connect} from 'react-redux';

import styles from 'styles/addIssue';
import actions from 'actions/todo';

function AddIssue({state, addIssue}) {
    const [issue, setIssue] = useState('');
    let maxId = 0;
    
    state.forEach(issue => {
        if (issue.id > maxId) maxId = issue.id;
    });

    return (
        <View style={styles.inputContainer}>
            <TextInput style={styles.inputBox} 
                onChangeText={e => setIssue(e)}/>
            <TouchableOpacity 
                style={styles.inputButton} 
                onPress={() => addIssue({
                    id: maxId + 1,
                    name: issue,
                    done: false
                })}>
                <Text>ADD</Text>
            </TouchableOpacity>
        </View>
    );
}

const mapStateToProps = state => ({
    state
});

const mapDispatchToProps = dispatch => ({
    addIssue: (newData) => dispatch(actions.addIssue(newData))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddIssue);
