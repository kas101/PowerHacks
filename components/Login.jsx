import React from 'react'
import { Button, Image, StyleSheet, Text, View } from 'react-native'

//Login screen
//intial page seen by user
export default function Login({ navigation }) {
    return (
        <View style={styles.container} >
            <Image style={styles.img} source={require('./assets/logo.jpg')} />
            <View style={styles.signincontainer}>
                <Text style={{ ...styles.text, fontSize: 24 }}>MEND THE PIPE</Text>
                <Text style={{ ...styles.text, marginBottom: 100, fontWeight: 'normal', fontVariant: 'italic' }}>Tell us where & We are there</Text>
                <Button title="Login" onPress={() => { navigation.navigate('Dashboard') }} />
                <Text style={{ ...styles.text, textAlign: 'left', marginTop: 10, fontWeight: 'normal' }} onPress={() => { navigation.navigate('Register') }}>Register</Text>
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
        width: 200,
        height: 200,
        marginTop: 100,
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

    button: {
        height: 60,
        backgroundColor: '#4D4AFA',
        alignItems: 'center',
        padding: 15,

    }

})