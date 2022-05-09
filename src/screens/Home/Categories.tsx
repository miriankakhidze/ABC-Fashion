import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Colors } from '../../constants/Colors'

const Categories = () => {
    return (
        <View style={{
            marginHorizontal: 15,
        }}>
            <Text style={styles.header}>Categories</Text>
            <View style={styles.container}>
                <View style={styles.item}>
                    <TouchableOpacity style={[styles.circle, { backgroundColor: 'red' }]}>
                    </TouchableOpacity>
                    <Text style={{ color: Colors.secondary }}>Apparel</Text>
                </View>
                <View style={styles.item}>
                    <TouchableOpacity style={[styles.circle, { backgroundColor: 'blue' }]}>
                    </TouchableOpacity>
                    <Text style={{ color: Colors.secondary }}>Beauty</Text>
                </View>
                <View style={styles.item}>
                    <TouchableOpacity style={[styles.circle, { backgroundColor: 'green' }]}>
                    </TouchableOpacity>
                    <Text style={{ color: Colors.secondary }}>Shoes</Text>
                </View>
                <View style={styles.item}>
                    <TouchableOpacity style={[styles.circle, { backgroundColor: 'white' }]}>
                    </TouchableOpacity>
                    <Text style={{ color: Colors.secondary }}>See All</Text>
                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    header: {
        fontSize: 26,
        fontWeight: 'bold',
        marginVertical: 10,
        color: "#515c6f",
    },
    item: {
        flexDirection: 'column',
        justifyContent: "center",
        alignItems: 'center',
        marginHorizontal: 8
    },
    circle: {
        width: 70,
        height: 70,
        borderRadius: 35
    }
})
export default Categories