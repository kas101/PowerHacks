import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import DrawerNav from '../navigation/DrawerNav';


const Drawer = createDrawerNavigator();

export default function Dashboard() {
    return (
        <DrawerNav />
    )
}
