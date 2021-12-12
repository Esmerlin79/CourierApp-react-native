import React, { useContext } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

import Header from '../components/Header'
import LoadingModal from '../components/LoadingModal';
import PackageItem from '../components/PackageItem';
import TitleDescription from '../components/TitleDescription';
import { AuthContext } from '../context/AuthContext'
import usePackages from '../hooks/usePackages'

const PackagesScreen = () => {

    const { username } = useContext(AuthContext);
    const { isLoading, packages } = usePackages( username );

    return (
        <View style={ styles.container }>
            <LoadingModal isLoading={ isLoading } />
            
            <Header />
            <FlatList 
                data={ packages }
                keyExtractor={ (item) => item.internalTracking + item.description }
                renderItem={ ({ item }) => <PackageItem packageItem={item} />}
                ListHeaderComponent={ () => <TitleDescription title='Paquetes' /> }
                showsVerticalScrollIndicator={ false }
                ItemSeparatorComponent={ () => <View style={ styles.divider } />}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    divider: {
        borderBottomWidth: 0.8,
        borderBottomColor: '#e1e1e1'
    }
});
export default PackagesScreen
