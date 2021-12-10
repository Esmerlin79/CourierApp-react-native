import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const HeaderLogo = () => {
    return (
        <View style={ styles.header }>
            <Image 
                source={ require('../assets/logo_white.png') }
                style={ styles.imageHeader }
            />
            <Text style={ styles.title }>Demo Courier</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    imageHeader: {
        width: 100,
        height: 100,
        marginRight: 10,
    },
    title: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold'
    },
});

export default HeaderLogo
