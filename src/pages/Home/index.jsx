import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'



export default function Home() {
    const [skill, setSkill] = useState('')
    const [mySkills, setMySkills] = useState([])


    function newSkillHandler() {
        setMySkills(currentSkills => [...currentSkills, skill])
        setSkill('')
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome, Harry</Text>
            
            <TextInput 
                style={styles.input}
                placeholder="New skill"
                onChangeText={setSkill}
                placeholderTextColor={'#999'}
            />
            
            <TouchableOpacity style={styles.button} onPress={newSkillHandler}>
                <Text style={styles.buttonText}>Add</Text>
            </TouchableOpacity>
            
            <Text style={[styles.title, styles.listTitle]}>
                Your Skills
            </Text>

            {   mySkills.map((skill, index) => {
                    <TouchableOpacity key={`${skill}_${index}`} style={styles.buttonSkill}>
                        <Text style={styles.textSkill}>
                            {skill}
                        </Text>
                    </TouchableOpacity>
                })
            }   
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
        marginVertical: 50,
    },
    buttonSkill: {
        backgroundColor: '#1f1e25',
        alignItems: 'center',
        marginVertical: 10,
        borderRadius: 50,
        padding: 20,
    },
    textSkill: {
        fontWeight: 'bold',
        color: '#fff',
        fontSize: 22,
    },
})