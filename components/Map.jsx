import React from 'react';
import { StyleSheet, View } from 'react-native';
import MapView from 'react-native-maps';

//map component that encapsulates google maps mapView
function Map() {

    return (

        <View style={styles.container}>
            <MapView
                style={styles.map}
                maxZoomLevel={5}
                initialRegion={{
                    latitude: -13.400652216166808,
                    longitude: 27.747727714046007,
                    latitudeDelta: 0.05,
                    longitudeDelta: 0.09,
                }}
            />



        </View>

    )


}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        height: 800,
        width: 400,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },

    map: {
        ...StyleSheet.absoluteFillObject,
    },
});

export default Map