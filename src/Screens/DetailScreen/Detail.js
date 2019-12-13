import React, { Component } from 'react'
import {
    Text,
    View,
    TouchableOpacity,
    ScrollView,
} from 'react-native'
import { connect } from 'react-redux'
import { styles } from './Styles'
import HeaderComponent from '../../Components/HeaderComponent'



class Detail extends Component {
    OnGoBack() {
        this.props.navigation.goBack()
        this.props.logout()
    }
    render() {
        const { title, abstract, byline, date, url, section, views } = this.props
        return (
            <View style={styles.wrapper}>
                <HeaderComponent
                    onClick={() => this.props.navigation.openDrawer()}
                    leftBarRequire={true}
                    rightBarRequire={false}
                />
                <ScrollView showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}>
                    <View style={styles.content}>
                        <TouchableOpacity onPress={() => this.OnGoBack()} ><Text style={{ fontSize: 20, fontWeight: '600' }}>&#x2190;</Text></TouchableOpacity>

                        <View style={styles.container}>
                            <View style={styles.marginStyles}>
                                <Text style={styles.label}>TITLE</Text>
                                <Text style={styles.data}>{title}</Text>
                            </View>
                            <View style={styles.marginStyles}>
                                <Text style={styles.label}>ABSTRACT</Text>
                                <Text style={styles.data}>{abstract}</Text>
                            </View>
                            <View style={styles.marginStyles}>
                                <Text style={styles.label}>VIEWS</Text>

                                <Text style={styles.data}>{views}</Text>
                            </View>
                            <View style={styles.marginStyles}>
                                <Text style={styles.label}>BYLINE</Text>

                                <Text style={styles.data}>{byline}</Text>
                            </View>
                            <View style={styles.marginStyles}>
                                <Text style={styles.label} >PUBLISHED DATE</Text>

                                <Text style={styles.data}>{date}</Text>
                            </View>
                            <View style={styles.marginStyles}>
                                <Text style={styles.label}> SECTION</Text>

                                <Text style={styles.data}>{section}</Text>
                            </View>
                            <View style={styles.marginStyles}>
                                <Text style={styles.label}>URL</Text>
                                <Text style={styles.data}>{url}</Text>
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