import React, { Component } from 'react'
import {
    View, Text,
    TouchableOpacity,
} from 'react-native'
import { StyleSheet } from 'react-native'
import { Button } from 'react-native-elements';
import { styles } from './Styles';



export const Cards = ({ item, onclick }) => {

    return (

        <TouchableOpacity onPress={() => onclick(item)} style={styles.shadowContainer}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <PublishedOn publish={item.published_date} />
                <View>
                    <Text style={{ marginLeft: 15 }}><Text style={{ fontWeight: '500', }}>Views:</Text> {item.views}</Text>
                    <Text style={{ marginLeft: 15 }}><Text style={{ fontWeight: '500' }}>Section:</Text> {item.section}</Text>
                </View>
            </View>

            <Text style={{ fontSize: 16, alignSelf: 'center', marginTop: 10 }}><Text style={{ fontWeight: '500', }}>Title:</Text>  {item.title}</Text>
        </TouchableOpacity >
    )

}

const PublishedOn = ({ publish }) => {
    return (
        <View
            style={[styles.detailsTime, {
                backgroundColor: '#EBDEF0', width: 84, borderRadius: 8,
                paddingVertical: 20,
            }]}
        >
            <Text style={{
                fontWeight: 'bold',
                fontSize: 12,
                lineHeight: 14,
                textAlign: 'center',
            }}>{publish}</Text>

        </View>
    )
}
