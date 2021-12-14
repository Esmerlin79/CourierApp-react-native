import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { getImageStatus } from '../helpers/utils'
import { Statuses } from '../interfaces/appInterfaces'

interface Props {
    status: Statuses;
}

const StatusItem = ({ status }: Props) => {

    const imageIcon = getImageStatus( status.description  );

    return (
        <View style={ styles.container }>

            <Text>{status.date}</Text>  

            <View style={{ width: 30  }} />

            <Image 
                source={ imageIcon }
                style={ styles.imgIcon }
            />

            <View style={{ width: 30  }} />

            <Text >{status.description}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        marginHorizontal: 20,
        flexDirection: 'row',
        paddingVertical: 10,
    },
    imgIcon: {
        width: 50,
        height: 50,
    }
});

export default StatusItem
