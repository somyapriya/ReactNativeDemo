import React, { Component } from 'react'
import {
    View, Text,
    TouchableOpacity,
} from 'react-native'
import { StyleSheet } from 'react-native'
import { Button } from 'react-native-elements';

import { Header, Icon } from 'react-native-elements';


export default class CTAButton extends Component {

    render() {
        return (
            <View>
                <Button
                    title={this.props.text}
                    size={this.props.size}
                    onPress={() => this.props.onClick()}
                />

            </View >
        );
    }
}
