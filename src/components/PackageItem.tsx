import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';

import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { getImageStatus } from '../helpers/utils';
import { Package, PackagesDetailsParams, StatusHistory } from '../interfaces/appInterfaces'
import { RootPackagesNavigatorParams } from '../navigator/PackagesNavigator';


type NavigationProps = StackNavigationProp<RootPackagesNavigatorParams, 'PackagesScreen'>;

interface Props {
    packageItem: Package;
}

const PackageItem = ({ packageItem }: Props) => {

    const { description, statusHistory, weight, courier, courierTracking, internalTracking, priceToPay, supplier} = packageItem;
    const navigation = useNavigation<NavigationProps>()

    const status: StatusHistory = statusHistory[statusHistory.length - 1 ];
    const dateFormatted = status.date.replace('/', '.').replace('/', '.');
    const imgIconStatus = getImageStatus( status.description );

    const navigationParams: PackagesDetailsParams = {
        description: description,
        weight: weight,
        courier: courier,
        courierTracking: courierTracking,
        internalTracking: internalTracking,
        priceToPay: priceToPay,
        supplier: supplier
    }
    
    return (
        <TouchableOpacity 
            activeOpacity={ 0.6 }
            style={ styles.container }
            onPress={ () => navigation.navigate('PackageDetailsScreen', navigationParams ) }
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
