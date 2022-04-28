import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'



function SkillCard({skill}) {
    return (
        <TouchableOpacity style={styles.buttonSkill}>
            <Text style={styles.textSkill}>
                {skill}
            </Text>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
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

export { SkillCard }