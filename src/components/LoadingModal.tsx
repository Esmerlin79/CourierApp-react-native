import React from 'react'
import { ActivityIndicator, Modal, StyleSheet, View } from 'react-native'

interface Props {
    isLoading: boolean;
}

const LoadingModal = ({ isLoading }: Props) => {
    return (
        <Modal
            animationType='fade'
            visible={ isLoading }
            transparent
        >
            <View style={ styles.modalBackground }>
                <View style={ styles.modalContainer }>
                    <ActivityIndicator size={40} color='#000' />
                </View>
            </View>

        </Modal>
    )
}

const styles = StyleSheet.create({
    modalBackground: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.3)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalContainer: {
        width: '90%',
        height: 300,
        backgroundColor: 'white',
        justifyContent: 'center',
    }
});

export default LoadingModal
