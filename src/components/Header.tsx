import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
    backButton?: boolean;
}

const Header = ({ backButton = false }: Props) => {

    const navigation = useNavigation();

    return (
        <View style={{ ...styles.container, height: Platform.OS === 'android' ? 115 : 130 }}>
            <View style={{ height: 30 }}></View>

            <View style={ styles.mainContent }>
                { backButton && (
                    <TouchableOpacity
                        activeOpacity={ 0.8 }
                        onPress={ () => navigation.goBack() }
                    >
                        <Icon name='chevron-back-outline' size={40} color="white" />
                    </TouchableOpacity>
                )}
                <Text style={ styles.title }>Demo Courier</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#004984',
        justifyContent: 'center',
        paddingHorizontal: 10,
    },
    title: {
        color: 'white',
        fontSize: 35,
        textTransform: 'uppercase',
        fontWeight: '700',
        marginLeft: 10,
    },
    mainContent: {
        flexDirection: 'row',
        alignItems: 'center',
    }
});

export default Header
