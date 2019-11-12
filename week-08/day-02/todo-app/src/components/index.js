import React from 'react';
import { View } from 'react-native';

import styles from 'styles/index';
import Header from './header';
import AddIssue from './addIssue';
import List from './list';

function Index() {
    return (
        <View style={styles.container}>
            <View style={styles.todoContainer}>
                <Header />
                <AddIssue />
                <List />
            </View>
        </View>
    );
}

export default Index;
