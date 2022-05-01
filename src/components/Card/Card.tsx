import React, { FC } from 'react'
import { StyleSheet, View } from 'react-native'
import { CardProps } from './Card.types'

const Card: FC<CardProps> = ({ children }) => {
    return (
        <View style={styles.container}>
            {children}
        </View>
    )
}

export default Card

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: '#fff',
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 8,
        marginVertical: 8,
        marginHorizontal: 16,
        shadowColor: "#ececec",
        shadowOpacity: 0.10,
        shadowRadius: 5,

        elevation: 13,

    },
})