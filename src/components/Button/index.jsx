import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'



function Button({onPress}) {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
                <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    button: {
        backgroundColor: '#a370f7',
        alignItems: 'center',
        borderRadius: 7,
        padding: 15,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        martinTop: 20,
        fontSize: 17,
    },
})

export { Button }