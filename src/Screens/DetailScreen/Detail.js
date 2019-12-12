import React, { Component } from 'react'
import {
    Text,
    View,
    SafeAreaView,
    StatusBar,
    Keyboard,
    Switch,
    Alert,
    Linking,
    Platform,
    Image,
    TouchableOpacity,
    ScrollView,
} from 'react-native'
import { connect } from 'react-redux'
import { StyleSheet } from 'react-native'
import HeaderComponent from '../../Components/HeaderComponent'



class Detail extends React.Component {
    OnGoBack() {
        this.props.navigation.goBack()
        this.props.logout()
    }
    render() {
        const { title, abstract, byline, date, url, section, views } = this.props
        return (
            <View style={{ flex: 1, paddingBottom: 0 }}>
                <HeaderComponent
                    onClick={() => this.props.navigation.openDrawer()}
                    leftBarRequire={true}
                    rightBarRequire={false}
                />
                <ScrollView showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}>
                    <View style={{ padding: 16, flex: 1 }}>
                        <TouchableOpacity onPress={() => this.OnGoBack()} ><Text style={{ fontSize: 20, fontWeight: '600' }}>&#x2190;</Text></TouchableOpacity>

                        <View style={{
                            padding: 16,    // padding: 16,
                            backgroundColor: '#ffffff',
                            marginTop: 28,
                            borderRadius: 10,
                            shadowColor: '#000',
                            shadowOffset: { width: 0, height: 0 },
                            shadowOpacity: 0.1,
                            shadowRadius: 4,
                            elevation: 3,
                            paddingVertical: 32,
                            flexDirection: 'column', justifyContent: 'space-between',  flex : 1
                        }}>
                            <View style={{ marginVertical: 10 }}>
                                <Text style={{ fontSize: 14, fontWeight: '600', opacity: 0.7 }}>TITLE</Text>
                                <Text style={{ paddingHorizontal: 10, marginTop: 10 }}>{title}</Text>
                            </View>
                            <View style={{ marginVertical: 10 }}>
                                <Text style={{ fontSize: 14, fontWeight: '600', opacity: 0.7 }}>ABSTRACT</Text>
                                <Text style={{ paddingHorizontal: 10, marginTop: 10 }}>{abstract}</Text>
                            </View>
                            <View style={{ marginVertical: 10 }}>
                                <Text style={{ fontSize: 14, fontWeight: '600', opacity: 0.7 }}>VIEWS</Text>

                                <Text style={{ paddingHorizontal: 10, marginTop: 10 }}>{views}</Text>
                            </View>
                            <View style={{ marginVertical: 10 }}>
                                <Text style={{ fontSize: 14, fontWeight: '600', opacity: 0.7 }}>BYLINE</Text>

                                <Text style={{ paddingHorizontal: 10, marginTop: 10 }}>{byline}</Text>
                            </View>
                            <View style={{ marginVertical: 10 }}>
                                <Text style={{ fontSize: 14, fontWeight: '600', opacity: 0.7 }}>PUBLISHED DATE</Text>

                                <Text style={{ paddingHorizontal: 10, marginTop: 10 }}>{date}</Text>
                            </View>
                            <View style={{ marginVertical: 10 }}>
                                <Text style={{ fontSize: 14, fontWeight: '600', opacity: 0.7 }}> SECTION</Text>

                                <Text style={{ paddingHorizontal: 10, marginTop: 10 }}>{section}</Text>
                            </View>
                            <View style={{ marginVertical: 10 }}>
                                <Text style={{ fontSize: 14, fontWeight: '600', opacity: 0.7 }}>URL</Text>

                                <Text style={{ paddingHorizontal: 10, marginTop: 10 }}>{url}</Text>
                            </View>
                        </View>
                    </View >
                </ScrollView>

            </View>
        );
    }

}
function mapStateToProps(state) {
    return {
        title: state.title,
        abstract: state.abstract,
        byline: state.byline,
        date: state.date,
        url: state.url,
        section: state.section,
        views: state.views
    }
}
function mapDispatchToProps(dispatch) {
    return {
        logout: () => dispatch({ type: 'LOGOUT' }),

    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Detail)