import React, { FC } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { BadgeProps } from './types'

const Badge: FC<BadgeProps> = ({ children, value = 0 }) => {
    return (
        <View>
            {children}
            <View style={styles.badge}><Text style={styles.value}>{value}</Text></View>
        </View>
    )
}

export default Badge

const styles = StyleSheet.create({
    badge: {
        width: 15,
        height: 15,
        borderRadius: 10,
        backgroundColor: '#ff6969',
        position: 'absolute',
        bottom: 8,
        left: 2,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#ff6969', // IOS
        shadowOffset: { height: 1, width: 1 }, // IOS
        shadowOpacity: 1, // IOS
        shadowRadius: 1, //IOS
        elevation: 12, // Android

    },
    value: {
        color: 'white',
        fontSize: 10,
        fontWeight: 'bold',
    }
})