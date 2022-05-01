import React, { FC } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { ButtonProps } from './types'

const Button: FC<ButtonProps> = ({ title = 'Button', onPress, icon, type }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles[type].button}>
            <Text style={styles[type].text}>{title}</Text>
            {icon && <View style={styles[type].icon}>
                <Icon name={icon} size={24} color="#ff6969" />
            </View>}
        </TouchableOpacity>
    )
}

export default Button

const styles: any = {
    default: StyleSheet.create({
        button: {
            height: 50,
            flexDirection: "row",
            textAlign: "center",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: '#ff6969',
            padding: 10,
            margin: 10,
            borderRadius: 25,

            shadowColor: '#ff6969', // IOS
            shadowOffset: { height: 1, width: 1 }, // IOS
            shadowOpacity: 1, // IOS
            shadowRadius: 1, //IOS 
            elevation: 12, // Android 
        },
        text: {
            color: 'white',
            fontSize: 16,
            fontWeight: 'bold',
        },
        icon: { position: "absolute", right: 10, width: 30, height: 30, backgroundColor: 'white', borderRadius: 15, justifyContent: "center", alignItems: "center" }

    }),
    primary: StyleSheet.create({

    }),
    outlined: StyleSheet.create({

    })
} 