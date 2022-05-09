import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { CartList } from '../../components';
import Button from '../../components/Button/Button';
import { Colors } from '../../constants/Colors';
import { CartScreenProp } from './CartScreen.types';


const list = [
    {
        img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: 'V Neck Shirt - Pink 1, Pink',
        price: 34.34,
        quantity: 34,
        onPress: () => { }
    },
    {
        img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: 'V Neck Shirt - Pink 1, Pink address',
        price: 34.34,
        quantity: 34,
        onPress: () => { }
    },
    {
        img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: 'Shipping address',
        price: 34.34,
        quantity: 34,
        onPress: () => { }
    },

]

const CartScreen = () => {
    const navigation = useNavigation<CartScreenProp>();

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Cart</Text>
            <View style={{
                flex: 5,
                width: '100%',
            }}>
                <CartList data={list} />
            </View>
            <View style={{
                alignItems: "center",
                flex: 1,
                borderTopWidth: 1,
                borderTopColor: '#e6e6e6',
                flexDirection: "row",
                justifyContent: "space-around",
            }}>
                <View style={{
                    flex: 3,
                    flexDirection: "column"
                }}>
                    <Text style={{
                        fontSize: 14,
                        color: '#979797',
                    }}>TOTAL</Text>
                    <Text style={{
                        fontSize: 18,
                        fontWeight: "bold",
                        color: Colors.secondary
                    }}>$24.99</Text>
                    <Text style={{
                        fontSize: 12,
                        color: "#979797"
                    }}>Free Domestic Shipping</Text>
                </View>
                <View style={{ flex: 4 }}>
                    <Button title='CHECKOUT' type='default' icon='keyboard-arrow-right' />
                </View>
            </View>
        </View>
    )
}

export default CartScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        marginHorizontal: 25,
    },
    header: {
        fontSize: 26,
        fontWeight: 'bold',
        marginVertical: 10,
        color: "#515c6f",
    }
})