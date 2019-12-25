import React, { Component } from 'react'
import { Text, View, FlatList, StyleSheet, Picker, Platform } from 'react-native'
import { connect } from 'react-redux'
import { styles } from './Styles'
import { fetchData } from '../../FetchApi/api';
import HeaderComponent from '../../Components/HeaderComponent'
import { Cards } from './Cards'
import { TouchableOpacity } from 'react-native-gesture-handler';

class Listing extends Component {

    constructor(props) {
        super(props)
        this.state = {
            pickerOpacity: 0,
            opacityOfOtherItems: 1,
            user: '1',
            results: [],
        }

    }
    componentDidMount() {
        this.callApi()
    }

    updateUser = (user) => {
        this.setState({ user: user })
        setTimeout(() => {
            this.callApi()
            this.togglePicker()
        }, 100);
    }
    togglePicker() {
        if (Platform.OS === 'ios') {
            if (this.state.pickerOpacity == 0) {
                this.setState({
                    pickerOpacity: 1,
                    opacityOfOtherItems: 0
                });
            } else {
                this.setState({
                    pickerOpacity: 0,
                    opacityOfOtherItems: 1
                });
            }
        }
    }

    async callApi() {
        const data = await fetchData(this.state.user)
        this.setState({ results: data.results })
    }
    keyExtractor = (item, index) => item.id

    onCardPress(details) {
        this.props.setTitle(details.title)
        this.props.setAbstract(details.abstract)
        this.props.setByline(details.byline)
        this.props.setSection(details.section)
        this.props.setUrl(details.url)
        this.props.setDate(details.published_date)
        this.props.setViews(details.views)

        this.props.navigation.navigate('Detail')
    }
    onChangePicker(itemValue) {
        this.setState({ itemValue: itemValue },
            () => this.callApi())

    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <HeaderComponent
                    onClick={() => this.props.navigation.openDrawer()}
                    leftBarRequire={true}
                    rightBarRequire={true}
                />
                <View style={styles.wrapper}>
                    <View style={styles.pickerWrapper}>
                        <Text style={styles.picker}>Select the period:</Text>
                        <TouchableOpacity onPress={() => this.togglePicker()} >
                            <Text style={styles.textPicker}>{this.state.user}</Text>
                        </TouchableOpacity>
                        {Platform.OS == 'android' && (
                            <Picker selectedValue={this.state.user}
                                onValueChange={this.updateUser} mode="dropdown">
                                <Picker.Item label="1" value={1} />
                                <Picker.Item label="7" value={7} />
                                <Picker.Item label="30" value={30} />
                            </Picker>
                        )}
                    </View>
                    <View style={{ paddingHorizontal: 16 }}>
                        {this.state.results.length > 0 ? (
                            <FlatList
                                data={this.state.results}
                                keyExtractor={this.keyExtractor}
                                showsVerticalScrollIndicator={false}
                                showsHorizontalScrollIndicator={false}
                                renderItem={({ item }) => (
                                    <Cards onclick={(item) => this.onCardPress(item)} item={item} />)}
                            />
                        ) : <Placeholder />}
                    </View>
                    {this.state.pickerOpacity == 1 && Platform.OS == 'ios' && (
                        <Picker selectedValue={this.state.user}
                            style={[styles.pickerStyle, Platform.OS == 'ios' ?
                                {
                                    opacity: this.state.pickerOpacity
                                } : '']
                            }
                            onValueChange={this.updateUser} mode="dropdown">
                            <Picker.Item label="1" value={1} />
                            <Picker.Item label="7" value={7} />
                            <Picker.Item label="30" value={30} />
                        </Picker>
                    )}

                </View>
            </View >

        );
    }

}



function mapDispatchToProps(dispatch) {
    return {
        setTitle: title =>
            dispatch({ type: 'SET_TITLE', payload: title }),
        setAbstract: item =>
            dispatch({ type: 'SET_ABSTRACT', payload: item }),
        setSection: section =>
            dispatch({ type: 'SET_SECTION', payload: section }),
        setDate: date =>
            dispatch({ type: 'SET_DATE', payload: date }),
        setByline: line =>
            dispatch({ type: 'SET_BYLINE', payload: line }),
        setUrl: url =>
            dispatch({ type: 'SET_URL', payload: url }),
        setViews: views => dispatch({ type: 'SET_VIEWS', payload: views })
    }
}


export default connect(
    null,
    mapDispatchToProps,
)(Listing)


const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 16,
        paddingHorizontal: 20,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 4,
        color: '#000',
        textAlign: 'center'
    },
    inputAndroid: {
        fontSize: 16,
        paddingHorizontal: 20,
        borderWidth: 0.5,
        borderColor: 'gray',
        borderRadius: 8,
        color: '#000',

    },
});






export const Placeholder = () => {

    return (
        <View>
            <View style={styles.placeholder} />
            <View style={styles.placeholder} />
            <View style={styles.placeholder} />
            <View style={styles.placeholder} />
        </View>


    )

}