import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

export default function Login() {
    return (
        <View style={styles.container} >
            <View style={styles.img}>
                <Text style={styles.text}>image</Text>
            </View>
            <View style={styles.signincontainer}>
                <Text style={{ ...styles.text, fontSize: 24 }}>MEND THE PIPE</Text>
                <Text style={styles.text}>Tell us where & We are there</Text>
                <Button title="Login" style={styles.button} />
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
        borderRadius: 50,
        alignSelf: 'center',
        width: 100,
        height: 100,
        marginTop: 100,
        backgroundColor: 'blue',


    },
    signincontainer: {
        height: 400,
        borderTopStartRadius: 50,
        borderTopRightRadius: 50,
        backgroundColor: '#000000',
        marginTop: 100
    },
    text: {
        color: 'white',
        textAlign: 'center',
        marginTop: 25,
        fontWeight: 'bold'
    },
    button: {
        width: 100
    }
})