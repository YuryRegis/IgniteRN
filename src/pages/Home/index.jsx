import React from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'



export default function Home() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome, Harry</Text>
            
            <TextInput 
                style={styles.input}
                placeholder="New skill"
                placeholderTextColor={'#999'}
            />
            
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Add</Text>
            </TouchableOpacity>
            
            <Text style={[styles.title, styles.listTitle]}>
                Your Skills
            </Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121015'
        paddingHorizontal: 30,
        paddingVertical: 70
    },
    title: {
        fontSize: 24,
        color: '#fff',
        fontWeight: 'bold',
    },
    input: {
        backgroundColor: '#1f1e25',
        color: '#fff',
        borderRadius: 7,
        marginTop: 30,
        fontSize: 18,
        padding: 15
    },
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
    listTitle: {
        marginTop: 50,
    },
})