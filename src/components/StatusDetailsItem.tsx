import React from 'react'
import { StyleSheet, Text, View } from 'react-native'


interface Props {
    details: { 
        weight: number,
        courier: string,
        courierTracking: string,
        internalTracking: string,
        priceToPay: number,
        supplier: string
    }
}

const StatusDetailsItem = ({ details }: Props) => {

    const { weight, courier, courierTracking, internalTracking, priceToPay, supplier } = details;
    
    return (
        <View style={[ styles.margin ]}>
            <Text style={ styles.title }>Peso: {weight} Libra(s)</Text>
            <Text style={ styles.title }>Precio retirar: DOP {priceToPay}</Text>
            <Text style={ styles.title }>Tracking interno: {internalTracking}</Text>
            <Text style={ styles.title }>Suplidor: {supplier}</Text>
            <Text style={ styles.title }>Transportista: {courier}</Text>
            <Text style={ styles.title }>Tracking transportista: {courierTracking}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    margin: {
        margin: 15,
        marginTop: 10,
    },
    title: {
        color: 'rgba(0,0,0,0.7)',
        fontSize: 16,
    },
});
export default StatusDetailsItem
