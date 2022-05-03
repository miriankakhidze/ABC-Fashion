import React, { FC } from 'react'
import { FlatList, StyleSheet } from 'react-native'
import { CartListProps } from './CartList.types'
import CartListItem from './CartListItem'

const CartList: FC<CartListProps> = ({ data }) => {
    return (
        <FlatList
            style={styles.container}
            data={data} renderItem={({ item, index }) => <CartListItem {...{ ...item, index, length: data.length }} />} />
    )
}

export default CartList

const styles = StyleSheet.create({
    container: {
        borderRadius: 10,

        paddingHorizontal: 15,
        paddingVertical: 8,

        marginVertical: 8,

        shadowColor: "#ececec",
        shadowOpacity: 0.10,
        shadowRadius: 5,
        elevation: 13,
    }
})