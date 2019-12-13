import React, { Component } from 'react'
import {
    View, Text,
    TouchableOpacity,
} from 'react-native'
import { styles } from './Styles';



export const Cards = ({ item, onclick }) => {

    return (

        <TouchableOpacity onPress={() => onclick(item)} style={styles.shadowContainer}>
            <View style={styles.cardWrapper}>
                <PublishedOn publish={item.published_date} />
                <View>
                    <Text style={styles.textInput}><Text style={styles.fontWeightText}>Views:</Text> {item.views}</Text>
                    <Text style={styles.textInput}><Text style={styles.fontWeightText}>Section:</Text> {item.section}</Text>
                </View>
            </View>

            <Text style={styles.titleWrapper}><Text style={styles.fontWeightText}>Title:</Text>  {item.title}</Text>
        </TouchableOpacity >
    )

}

const PublishedOn = ({ publish }) => {
    return (
        <View
            style={styles.publishDateWrapper}
        >
            <Text style={styles.textPublish}>{publish}</Text>

        </View>
    )
}
