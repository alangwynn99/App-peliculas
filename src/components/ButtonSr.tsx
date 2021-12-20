import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const ButtonSr = () => {
    return (
        <View style={styles.button}>
            <Text style={styles.buttonText}>Search</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 12,
        paddingVertical: 14,
        paddingHorizontal: 10,
        backgroundColor: '#3C94EB',
        height: 50,
        marginBottom: 10,
        width: 325
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16,
        textAlign: 'center'
    }
})