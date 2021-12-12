import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

interface Props {
    title: string;
}

const TitleDescription = ({ title }: Props) => {
    return (
        <View>
            <Text style={ styles.packagesTitle } >{ title }</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    packagesTitle: {
        margin: 15,
        marginTop: 20,
        fontSize: 35,
        fontWeight: '700',
        color: '#4A4A4A',
    }
});
export default TitleDescription
