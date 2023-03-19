import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import Dashboard from '../components/Dashboard'
import Login from '../components/Login'
import Register from '../components/Register'

const Stack = createStackNavigator()

//Stack Navigator to hold all screens
export default function StackNav() {
    return (
        <Stack.Navigator>
            <Stack.Screen options={{ headerShown: false }} name='Login' component={Login} />
            <Stack.Screen name='Dashboard' options={{ headerShown: false }} component={Dashboard} />
            <Stack.Screen name='Register' component={Register} />
        </Stack.Navigator>
    )
}
