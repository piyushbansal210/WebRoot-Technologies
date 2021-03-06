import { View, Text, StyleSheet, Dimensions, Pressable } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons';

const { width, height } = Dimensions.get("screen");

export default function Discover(props) {
    return (
        <View style={[styles.container, props.styleContainer]}>
            <Text style={[styles.header, props.styleHeader]}>{props.Standout[0].title}</Text>
            <Text style={styles.context}>{props.Standout[0].context}</Text>
            {
                props.Standout[0].buttonText.length > 0 ? <Pressable style={styles.button} onPress={()=>props.navigation.navigate(props.Standout[0].navigate)}>
                    <Feather name="plus" size={18} color="white" />
                    <Text style={styles.buttonText}>{props.Standout[0].buttonText}</Text>
                </Pressable> : null
            }

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        marginHorizontal: 15,
        marginTop: 20,
        marginBottom: 20,
    },
    button: {
        flexDirection: 'row',
        backgroundColor: '#27cccb',
        marginTop: 15,
        alignItems: 'center',
        width: width / 4,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10
    },
    buttonText: {
        fontFamily: 'Medium',
        fontSize: 16,
        marginRight: 5,
        color: 'white'
    },
    header: {
        fontFamily: 'Medium',
        fontSize: 22
    },
    context: {
        fontFamily: 'Regular',
        fontSize: 16,
        marginTop: 15,
        lineHeight: 20
    }
})