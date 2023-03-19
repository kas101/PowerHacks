import React from 'react';
import { StyleSheet } from 'react-native';
import Map from './Map';

function TreatmentFacility({ navigation }) {

    const locations = { 'name': 'Nkana Water', 'position': { 'lad': -12.79069861381155, 'log': 28.229424338278726 } }
    const [viewMap, setViewMap] = React.useState(false);
    const [position, setPosition] = React.useState(locations.position)
    return (

        <Map />
    )


}



const styles = StyleSheet.create({
    headerText: {
        padding: 10,
        marginVertical: 5,
        backgroundColor: '#000000',
        color: '#ffffff',
        fontSize: 18,
        textAlignVertical: 'center',
        marginHorizontal: 10,
        fontWeight: 'bold'
    },
    locations: {
        color: '#000000',
        padding: 10,
        fontSize: 18
    }
})

export default TreatmentFacility