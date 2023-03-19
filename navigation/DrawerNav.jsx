import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import Leakage from '../components/Leakage';
import TreatmentFacility from '../components/TreatmentFacility';


const Drawer = createDrawerNavigator();

export default function DrawerNav() {
    return (
        <Drawer.Navigator screenOptions={{
            headerTitle: 'MEND THE PIPE',
            headerStyle: {
                backgroundColor: '#000000'
            },
            headerTintColor: '#ffffff',
            headerTitleAlign: 'center',
            headerTitleStyle: {
                color: '#ffffff'
            }
        }}>
            <Drawer.Screen name="Report Leakage" component={Leakage} />
            <Drawer.Screen name="Treatment Facility" component={TreatmentFacility} />
        </Drawer.Navigator>
    )
}
