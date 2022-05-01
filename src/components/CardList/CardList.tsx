import React, { FC } from 'react'
import { FlatList, StyleSheet } from 'react-native'
import { CardListProps } from './CardList.types'
import CardListItem from './CardListItem'

const CardList: FC<CardListProps> = ({ data }) => {
    return (
        <FlatList
            style={styles.container}
            data={data} renderItem={({ item, index }) => <CardListItem {...{ ...item, index, length: data.length }} />} />
    )
}

export default CardList


const styles = StyleSheet.create({
    container: {
        width: "100%",

        backgroundColor: '#fff',
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