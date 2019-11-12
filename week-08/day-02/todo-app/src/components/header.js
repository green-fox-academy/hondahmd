import React from 'react';
import { View, Text } from 'react-native';

import styles from 'styles/header';

function Header() {
    return (
        <View style={styles.headingContainer}>
            <Text style={styles.heading}>TODO</Text>
        </View>
    );
}

export default Header;
