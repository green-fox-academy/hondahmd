import {StyleSheet} from 'react-native';

import {getPixel} from 'common/common.js';

const styles = StyleSheet.create({
    listContainer: {
        marginTop: getPixel(20),
        width: '80%',
    },
    issueLine: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    deleteIcon: {
        backgroundColor: 'white',
        width: getPixel(40),
        height: getPixel(40)
    },
    iconContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default styles;
