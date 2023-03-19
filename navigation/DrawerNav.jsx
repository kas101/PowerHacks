import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItem,
    DrawerItemList
} from '@react-navigation/drawer';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Leakage from '../components/Leakage';
import TreatmentFacility from '../components/TreatmentFacility';

//Dashboard seen after user is authenticated

function CustomDrawerContent(props) {
    return (
        <DrawerContentScrollView {...props}>
            <View style={{ flexDirection: 'column', height: 300, backgroundColor: '#000000', marginBottom: 50, }}>
                <View style={styles.imgContainer}>
                    <Image style={styles.img} source={require('../components/assets/logo.jpg')} />
                    <View style={{ flexDirection: 'column', marginVertical: 35, marginHorizontal: 15 }}>
                        <Text style={styles.text}>Welcome</Text>
                        <Text style={{ ...styles.text, fontSize: 18 }}>Jacob</Text>
                    </View>
                </View>
                <Text style={{ ...styles.text, fontStyle: 'italic', fontSize: 18, marginTop: -50, marginLeft: 10 }}>Tell Us Where & We are There</Text>
            </View>
            <DrawerItemList {...props} />
            <DrawerItem
                style={{ marginTop: 200 }}
                activeTintColor='#000000'
                icon={({ color, size }) => <MaterialCommunityIcons name='exit-to-app' color={color} size={size} />}
                label='Signout' />

        </DrawerContentScrollView>
    );
}

const Drawer = createDrawerNavigator();

export default function DrawerNav() {
    return (
        <Drawer.Navigator
            screenOptions={{
                headerTitle: 'MEND THE PIPE',
                headerStyle: {
                    backgroundColor: '#000000'
                },
                headerTintColor: '#ffffff',
                headerTitleAlign: 'center',
                headerTitleStyle: {
                    color: '#ffffff'
                }
            }}
            drawerContent={(props) => (<CustomDrawerContent {...props} />)}
        >
            <Drawer.Screen
                options={{
                    drawerActiveTintColor: '#000000',
                    drawerIcon: ({ color, size }) => (<Entypo name='water' color={color} size={size} />),

                }}
                name="Report Leakage"
                component={Leakage} />
            <Drawer.Screen
                options={{
                    drawerActiveTintColor: '#000000',
                    drawerIcon: ({ color, size }) => (<MaterialCommunityIcons name='factory' color={color} size={size} />),

                }}
                name="Treatment Facility"
                component={TreatmentFacility} />
        </Drawer.Navigator>
    )
}


const styles = StyleSheet.create({
    img: {
        height: 150,
        width: 150,
        borderRadius: 75,
    },
    imgContainer: {
        marginTop: -5,
        paddingHorizontal: 5,
        paddingVertical: 20,
        height: 300,
        backgroundColor: '#000000',
        flexDirection: 'row'
    },
    text: {
        color: '#ffffff',
        fontSize: 24,
    }
})