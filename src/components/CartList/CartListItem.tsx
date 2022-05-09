import React, { FC, useState } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import IonIcon from 'react-native-vector-icons/Ionicons'
import { Colors } from '../../constants/Colors'
import { CartListItemProps } from './CartList.types'

const CartListItem: FC<CartListItemProps> = ({ img, title, price, index, length }) => {
    const [quantity, setQuantity] = useState(1)
    const handleQuantity = (value: number) => {
        if (quantity + value >= 0)
            setQuantity((prevState) => prevState + value)
    }

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: img }} />

            <View style={[styles.description, { borderBottomWidth: index == length - 1 ? 0 : 1, }]}>

                <Text style={{ color: '#515c72', fontSize: 16, marginBottom: 8, width: '60%' }}>{title}</Text>

                <Text style={{ color: '#ff6969', fontSize: 16, marginBottom: 8 }}>{price}</Text>

                <View style={styles.buttonsContainer}>
                    <TouchableOpacity style={styles.iconButton} onPress={() => handleQuantity(-1)}>
                        <IonIcon name="remove" size={16} color="grey" />
                    </TouchableOpacity>
                    <Text style={{ color: Colors.secondary }}>{quantity}</Text>
                    <TouchableOpacity style={styles.iconButton} onPress={() => handleQuantity(1)}>
                        <IonIcon name="add" size={16} color="grey" />
                    </TouchableOpacity>
                </View>

            </View>
        </View >
    )
}

export default CartListItem

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",
        marginVertical: 10
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    description: {
        marginLeft: 20,
        width: '100%',
        flexDirection: "column",
        borderBottomColor: "#e5e5e9",
        paddingVertical: 15,
    },
    buttonsContainer: {
        width: 80,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    iconButton: {
        backgroundColor: "#e3e5e8",
        width: 20,
        height: 20,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 12.5,
    }
})