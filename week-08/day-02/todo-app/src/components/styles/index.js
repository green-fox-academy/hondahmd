import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    body: {
        margin: 0,
        padding: 0,
    },
    container: {
        margin: 0,
        width: '100%',
        height: '100%',
        backgroundColor: '#43E2C1',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    todoContainer: {
        width: '90%',
        height: '80%',
        backgroundColor: '#F7F7F7',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    }
});

export default styles;
