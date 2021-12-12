import React from 'react';

import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { getImageStatus } from '../helpers/utils';
import { Package, StatusHistory } from '../interfaces/appInterfaces'

interface Props {
    packageItem: Package;
}

const PackageItem = ({ packageItem }: Props) => {

    const { description, statusHistory} = packageItem;

    const status: StatusHistory = statusHistory[statusHistory.length - 1 ];
    const dateFormatted = status.date.replace('/', '.').replace('/', '.');
    const imgIconStatus = getImageStatus( status.description );
    
    return (
        <TouchableOpacity 
            activeOpacity={ 0.6 }
            style={ styles.container }
        >
            <Image 
                source={ imgIconStatus }
                style={ styles.imgStatus }
            />

            <View style={{ width: 15 }} />

            <View>
                <Text style={ styles.title }>{ description }</Text>
                <Text style={{ color: '#000'}}>{ status.description }</Text>
                <Text style={{ color: '#000'}}>{ dateFormatted }</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        paddingVertical: 20,
        flexDirection: 'row',
    },
    imgStatus: {
        width: 60,
        height: 60,
    },
    title: {
        color: '#000',
        fontSize: 20,
        fontWeight: 'bold',
    }
});

export default PackageItem
