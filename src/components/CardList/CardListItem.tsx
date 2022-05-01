import React, { FC } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import IonIcon from 'react-native-vector-icons/Ionicons'
import { CardListItemProps } from './CardList.types'

const CardListItem: FC<CardListItemProps> = ({ icon, title, value, index, length }) => {
    return (
        <View style={styles.container}>
            <View style={styles.iconContainer}>
                <IonIcon name={icon} size={24} color="#727c8e" />
            </View>
            <TouchableOpacity style={[styles.middleContainer, { borderBottomWidth: index == length - 1 ? 0 : 1, }]}>
                <View style={{
                    flex: 5,
                    justifyContent: "space-between",
                    flexDirection: "row",
                }}>
                    <Text style={{ color: '#727c8e' }}>{title}</Text>
                    <Text style={{ color: '#727c8e' }}>{value}</Text>
                </View>

                <View style={styles.rightContainer}>
                    <View style={styles.iconButton}>
                        <IonIcon name="chevron-forward-outline" size={16} color="grey" />
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default CardListItem

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row'
    },
    iconContainer: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
    },
    middleContainer: {
        flex: 5,
        flexDirection: "row",
        borderBottomColor: "#f1f2f3",
        paddingVertical: 15,
    },
    rightContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-end",
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