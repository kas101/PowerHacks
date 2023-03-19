import React from 'react';
import { StyleSheet } from 'react-native';
import MapView from 'react-native-maps';

function Map() {
    const [region, setRegion] = React.useState({
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    },)


    const onRegionChange = (region) => {
        //setRegion({ region });
    }


    return (

        <MapView
            style={styles.map}
            region={region}
            onRegionChange={onRegionChange}
        />


    )


}

const styles = StyleSheet.create({

    map: {
        ...StyleSheet.absoluteFillObject,
    },
});

export default Map