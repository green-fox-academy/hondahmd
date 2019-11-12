import {StyleSheet} from 'react-native';

import {getPixel} from 'common/common.js';

const styles = StyleSheet.create({
    inputContainer: {
        marginTop: getPixel(30),
        width: '80%',
        height: '8%',
        borderStyle: 'solid',
        borderWidth: getPixel(3),
        borderColor: '#B6B6B6',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    inputBox: {
        padding: getPixel(10),
        fontSize: getPixel(20),
        maxWidth: '80%',
        flexGrow: 4
    },
    inputButton: {
        backgroundColor: '#0097EF',
        maxWidth: '20%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexGrow: 1,
    }
});

export default styles;
