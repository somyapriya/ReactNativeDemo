import { StyleSheet } from 'react-native'


export const styles = StyleSheet.create({
    wrapper: { flex: 1, paddingBottom: 0 },
    content: {
        padding: 16, flex: 1
    },
    container: {
        padding: 16,
        backgroundColor: '#ffffff',
        marginTop: 28,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        paddingVertical: 32,
        flexDirection: 'column', justifyContent: 'space-between', flex: 1
    },
    marginStyles: { marginVertical: 10 },
    label: { fontSize: 14, fontWeight: '600', opacity: 0.7 },
    data: { paddingHorizontal: 10, marginTop: 10 }

})