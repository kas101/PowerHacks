import React from 'react'
import { Button, Image, StyleSheet, Text, TextInput, View } from 'react-native'


//Regiter screen
//administor user registration
export default function Register({ navigation }) {
    return (
        <View style={styles.container} >
            <Image style={styles.img} source={require('./assets/logo.jpg')} />
            <View style={styles.signincontainer}>
                <Text style={{ ...styles.text, fontSize: 24 }}>MEND THE PIPE</Text>
                <Text style={{ ...styles.text, marginBottom: 30, fontWeight: 'normal', fontVariant: 'italic' }}>Tell us where & We are there</Text>
                <TextInput placeholder='Email' style={styles.input} placeholderTextColor='#000000' />
                <TextInput placeholder='Password' style={{ ...styles.input, marginTop: 10, marginBottom: 30 }} placeholderTextColor="#000000" />
                <Button title="Register" onPress={() => { navigation.navigate('Dashboard') }} />

            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderRadius: 5,



    },
    img: {
        borderRadius: 100,
        alignSelf: 'center',
        width: 200,
        height: 200,
        marginTop: 50,
        backgroundColor: 'blue',



    },
    signincontainer: {
        height: 400,
        borderTopStartRadius: 50,
        borderTopRightRadius: 50,
        backgroundColor: '#000000',
        marginTop: 50,
        paddingHorizontal: 50,

    },
    text: {
        color: 'white',
        textAlign: 'center',
        marginTop: 25,
        fontWeight: 'bold'

    },
    input: {
        height: 65,
        backgroundColor: '#ffffff',
        borderRadius: 5,
    }

})