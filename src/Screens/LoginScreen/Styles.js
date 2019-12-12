import { StyleSheet } from 'react-native'


export const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff' },
    label: {
        color: '#000',
        fontSize: 12,
        letterSpacing: 0.42,
        marginVertical: 8,
    },
    inputWrapper: { paddingHorizontal: 32, flexDirection: 'column', justifyContent: 'center', flex: 1 },
    inputText: {
        height: 40,
        borderRadius: 4,
        fontSize: 16,
        letterSpacing: 0.42,
        paddingLeft: 16,
        borderWidth: 1,
        borderColor: 'rgb(160,203,245)',
    },
    errorText: {
        color: 'red',
        fontSize: 14,
        marginBottom: 5
    }

})