import { StyleSheet } from 'react-native';
import {getPixel} from 'common/common.js';

const styles = StyleSheet.create({
    headingContainer: {
        marginTop: getPixel(30),
        display: 'flex',
        justifyContent: 'center'
    },
    heading: {
        fontSize: getPixel(64),
        fontWeight: '300',
        color: '#b8b8b8'
    }
});

export default styles;
