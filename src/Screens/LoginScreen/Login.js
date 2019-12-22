
import React, { Component, useReducer } from 'react'
import {
    Text,
    View,
    SafeAreaView,
    TouchableOpacity, StatusBar, TextInput
} from 'react-native'
import { styles } from './Styles'
import HeaderComponent from '../../Components/HeaderComponent'
import CTAButton from '../../Components/CTAButton'
export class Login extends React.Component {
    static navigationOptions = {
        header: null,
    }
    constructor(props) {
        super(props)
        this.state = {
            username: '', password: '', errorField: false, errorMessage: 'Please enter required fields **'
        }
    }
    loginClicked() {
        const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

        const { username, password } = this.state
        if (username === '' && password === '' || username === '' || password === '' || reg.test(username) != true || password.length < 8) {
            this.setState({ errorField: true })

            if (reg.test(username) === false || username === '') {
                this.setState({ errorMessage: 'Please enter valid email' })
            }
            if (password === '' || password.length < 8) {
                this.setState({ errorMessage: 'Please enter valid password of atleast 8 character' })
            }
            if (username === '' && password === '' || (reg.test(username) != true) && password.length < 8) {
                this.setState({ errorMessage: 'Please enter required fields **' })
            }
        }
        else {
            this.setState({ errorField: false, })
            this.props.navigation.navigate('AuthStack')
        }

    }
    render() {
        const { errorField } = this.state
        return (
            <View style={styles.container}>
                <SafeAreaView style={{ backgroundColor: '#000' }} />
                <StatusBar barStyle="light-content" />

                <HeaderComponent
                    leftBarRequire={false}
                    rightBarRequire={false}
                />
                <View style={styles.inputWrapper}>
                    <Text style={styles.label}>USERNAME*</Text>
                    <TextInput
                        underLineColorAndroid='transparent'
                        style={styles.inputText}
                        value={this.state.username}
                        onChangeText={(text) => this.setState({ username: text })}
                        placeholder='username' />

                    <Text style={styles.label}>PASSWORD*</Text>
                    <TextInput
                        secureTextEntry={true}
                        underLineColorAndroid='transparent'
                        style={styles.inputText}
                        value={this.state.password}
                        onChangeText={(text) => this.setState({ password: text })}
                        placeholder='password'
                    />

                    <View style={{ marginTop: 30 }}>
                        {errorField && (
                            <Text style={styles.errorText}>{this.state.errorMessage}</Text>
                        )}
                        <CTAButton onClick={() => this.loginClicked()} size={30} text={"Login"} />
                    </View>
                </View>


            </View >
        );
    }
}