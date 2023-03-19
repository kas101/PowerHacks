import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
function TreatmentFacility() {
    return (
        <ScrollView>
            <View>
                <Text style={styles.headerText}>Copperbelt Province</Text>
                <ScrollView>
                    <Text style={styles.locations}>Nkana Water</Text>
                    <Text style={styles.locations}>Lukanga Water</Text>
                    <Text style={styles.locations}>Kafubu Water</Text>

                </ScrollView>
            </View>
            <View>
                <Text style={styles.headerText}>Lusaka Province</Text>
                <ScrollView>
                    <Text style={styles.locations}>Lusaka Water</Text>
                </ScrollView>
            </View>
            <View>
                <Text style={styles.headerText}>Central Province</Text>
                <ScrollView>
                    <Text style={styles.locations}>Lukanga Water</Text>

                </ScrollView>
            </View>

        </ScrollView>
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