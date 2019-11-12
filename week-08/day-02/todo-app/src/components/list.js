import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {View, Text, Image} from 'react-native';

import actions from 'actions/todo';
import styles from 'styles/list';
import DeleteIcon from './deleteIcon';

function List({state, getAllIssues}) {
    useEffect(() => {
        getAllIssues()
    }, [getAllIssues]);

    return ( 
        <View style={styles.listContainer}>
            {
                state.map(issue => 
                    <View key={'issue' + issue.id} style={styles.issueLine}> 
                        <Text>{issue.name}</Text>
                        <View style={styles.iconContainer}>
                            <DeleteIcon id={issue.id}/>
                        </View>      
                    </View>    
                )
            }
        </View>
    );
}

const mapStateToProps = state => ({
    state
});

const mapDispatchToProps = dispatch => ({
    getAllIssues: () => dispatch(actions.getAllIssues())
})

export default connect(mapStateToProps, mapDispatchToProps)(List);
