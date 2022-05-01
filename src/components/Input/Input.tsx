import React, { FC } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { InputProps } from './types'

const Input: FC<InputProps> = ({ icon, label, ...rest }) => {
    return (
        <View style={styles.container}>
            {icon && <View style={styles.iconContainer}>
                {icon}
            </View>}
            <View style={{ flex: 1, height: 45 }}>
                {label && <Text style={styles.label}>{label}</Text>}
                <TextInput  {...{ ...rest, style: styles.input, selectionColor: "#ff6969" }} />
            </View>
        </View>
    )
}

export default Input

const styles = StyleSheet.create({
    container: {
        // felx: 1,
        flexDirection: "row",
        justifyContent: "flex-start",
        marginVertical: 8

    },
    label: {},
    iconContainer: { borderWidth: 0, height: 45, justifyContent: "center", alignItems: "center", marginHorizontal: 12 },
    input: { borderWidth: 0, width: "100%", height: 35, padding: 0 }
})