import { StyleSheet, Platform } from 'react-native'


export const styles = StyleSheet.create({
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
    },
    textInput: { marginLeft: 15 },
    cardWrapper: { flexDirection: 'row', alignItems: 'center' },
    titleWrapper: { fontSize: 16, alignSelf: 'center', marginTop: 10 },
    publishDateWrapper: {
        backgroundColor: '#EBDEF0', width: 84, borderRadius: 8,
        paddingVertical: 20,
    },
    textPublish: {
        fontWeight: 'bold',
        fontSize: 12,
        lineHeight: 14,
        textAlign: 'center',
    }, picker: { fontSize: 16, marginRight: 10, fontWeight: '600' },
    wrapper: {
        backgroundColor: '#F9F9F9', flex: 1, paddingTop: 10
    },
    pickerWrapper: { flexDirection: 'row', marginHorizontal: 16, marginBottom: 30 }, textPicker: { borderWidth: 1, width: 50, textAlign: 'center' },
    pickerStyle:
        Platform.OS == 'ios' ? {
            alignSelf: 'flex-start',
            position: 'relative', bottom: 200, width: '100%', backgroundColor: '#fff',
            shadowColor: '#000',
            shadowOffset: { width: 0, height: -8 },
            shadowOpacity: 0.1,
            shadowRadius: 4,
        } : '',
})


