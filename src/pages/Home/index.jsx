import React, { useState } from 'react'
import { Button, SkillCard } from '../../components'
import { View, Text, TextInput, StyleSheet, FlatList } from 'react-native'



export default function Home() {
    const [skill, setSkill] = useState('')
    const [mySkills, setMySkills] = useState([])


    function newSkillHandler() {
        setMySkills(currentSkills => [...currentSkills, skill])
        setSkill('')
    }

    function itemHandler({item}) {
        return <SkillCard skill={item}/>
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
            
            <Button onPress={newSkillHandler}/>
            
            <Text style={[styles.title, styles.listTitle]}>
                Your Skills
            </Text>

            <FlatList
                data={mySkills}
                renderItem={itemHandler}
                keyExtractor={(item, index) => `${item}_${index}`}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121015',
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
    
    listTitle: {
        marginVertical: 50,
    },
})