import { StyleSheet } from 'react-native'


export const styles = StyleSheet.create({
    pickerWrapper: { flexDirection: 'row', marginTop: 20, alignItems: 'center', marginBottom: 10 },
    shadowContainer: {

        padding: 16,
        backgroundColor: '#ffffff',
        marginBottom: 8,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        flex: 1,
    }, placeholder: {
        backgroundColor: '#D7DBDD', marginBottom: 8,
        borderRadius: 10,
        height: 110,
        padding: 16,
        marginBottom: 10,
    }
})


