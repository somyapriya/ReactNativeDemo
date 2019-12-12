import React, { Component } from 'react'
import {
    View, Text,
    TouchableOpacity,
} from 'react-native'
import { StyleSheet } from 'react-native'

import { Header, Icon } from 'react-native-elements';


export default class HeaderComponent extends Component {

    render() {
        return (
            <View>
                <Header
                    statusBarProps={{ barStyle: 'light-content' }}
                    barStyle="light-content"
                    leftComponent={this.props.leftBarRequire ? <MyCustomLeftComponent onClick={() => this.props.onClick()} /> : null}
                    centerComponent={<MyCustomCenterComponent />}
                    // rightComponent={this.props.rightBarRequire ? <MyCustomRightComponent onSearchPress={() => this.props.onSearchPress()} /> : null}
                    containerStyle={styles.wrapperHeader}
                />

            </View >
        );
    }
}





const MyCustomLeftComponent = (props) => {

    return (

        <TouchableOpacity onPress={() => props.onClick()}>
            <Icon
                name='menu' color='#fff'
            />
        </TouchableOpacity >
    )

}

const MyCustomCenterComponent = (props) => {

    return (
        <View>
            <Text style={styles.heading}>NY Times Most Popular</Text>
        </View >
    )

}
// const MyCustomRightComponent = (props) => {

//     return (
//         <View style={styles.wrapperRight}>
//             <TouchableOpacity onPress={() => props.onSearchPress()}>
//                 <Icon
//                     name='search' color='#fff'
//                 />
//             </TouchableOpacity >
//         </View>
//     )

// }


const styles = StyleSheet.create({
    wrapperRight: {
        flexDirection: 'row', justifyContent: 'space-between'

    },
    heading: { color: '#fff', fontSize: 20, fontWeight: '600' },
    wrapperHeader: {
        backgroundColor: 'rgb(45,228,197)',
        justifyContent: 'space-around',
    }
});