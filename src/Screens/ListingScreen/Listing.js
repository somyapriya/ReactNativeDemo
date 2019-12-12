import React, { Component } from 'react'
import {
    Text,
    View,
    FlatList, StyleSheet
} from 'react-native'
import RNPickerSelect from 'react-native-picker-select';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux'
import { styles } from './Styles'
import { fetchData } from '../../FetchApi/api';
import HeaderComponent from '../../Components/HeaderComponent'
import { Cards } from './Cards'
import { placeholder } from '@babel/types';

class Listing extends Component {

    constructor(props) {
        super(props)
        this.state = {
            itemValue: 1,
            items: [
                {
                    label: "1",
                    value: 1,
                },
                {
                    label: "7",
                    value: 7,
                },
                {
                    label: "30",
                    value: 30,
                },

            ],
            results: [],
        }

    }
    componentDidMount() {
        this.callApi()
    }
    async callApi() {
        const data = await fetchData(this.state.itemValue)
        console.log("data", data.results)
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
        this.setState({ itemValue: itemValue })
        setTimeout(() => {
            this.callApi()
        }, 100);
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <HeaderComponent
                    onClick={() => this.props.navigation.openDrawer()}
                    leftBarRequire={true}
                    rightBarRequire={true}
                />
                <View style={{
                    paddingHorizontal: 16,
                    backgroundColor: '#F9F9F9', marginBottom: 20,
                    flex: 1
                }}>
                    <View style={styles.pickerWrapper}>
                        <Text style={{ fontSize: 16, marginRight: 10, fontWeight: '600' }}>Select the period:</Text>
                        <RNPickerSelect
                            items={this.state.items}
                            onValueChange={(itemValue) => this.onChangePicker(itemValue)}
                            value={this.state.itemValue}
                            style={pickerSelectStyles}
                        />
                    </View>

                    {this.state.results.length > 0 ? (
                        <FlatList
                            data={this.state.results}
                            keyExtractor={this.keyExtractor}
                            showsVerticalScrollIndicator={false}
                            showsHorizontalScrollIndicator={false}
                            renderItem={({ item }) => (
                                <Cards onclick={(item) => this.onCardPress(item)} item={item} />
                            )}
                        />

                    ) : <Placeholder />}

                </View >
            </View>
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