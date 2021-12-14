import React from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'

import Header from '../components/Header'
import TitleDescription from '../components/TitleDescription'
import { PackagesDetailsParams } from '../interfaces/appInterfaces'
import { RootPackagesNavigatorParams } from '../navigator/PackagesNavigator'
import useStatus from '../hooks/useStatus'
import StatusItem from '../components/StatusItem'
import StatusDetailsItem from '../components/StatusDetailsItem'
import LoadingModal from '../components/LoadingModal'

interface Props extends StackScreenProps<RootPackagesNavigatorParams, 'PackageDetailsScreen'> {};

const PackageDetailsScreen = ({ route }: Props) => {

    const { description, weight, courier, courierTracking, internalTracking, priceToPay, supplier }: PackagesDetailsParams = route.params;
    const { statuses, isLoading } = useStatus( internalTracking );

    return (
        <View style={ styles.container }>
            <Header backButton />
            <LoadingModal isLoading={ isLoading } />
            <TitleDescription title={description} />

            <FlatList 
                data={ statuses }
                keyExtractor={ (item) => item.description + Math.random() }
                ListHeaderComponent={ () => <StatusDetailsItem details={{
                    weight, 
                    courier, 
                    courierTracking, 
                    internalTracking, 
                    priceToPay, 
                    supplier
                }} /> }
                renderItem={ ({item}) => <StatusItem status={ item } />}
                ItemSeparatorComponent={ () => <View style={ styles.divider } />}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    divider: {
        borderBottomWidth: 0.8,
        borderBottomColor: '#e1e1e1',
    }
});
export default PackageDetailsScreen
