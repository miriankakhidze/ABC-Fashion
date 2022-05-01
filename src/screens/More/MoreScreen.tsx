import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { CardList } from '../../components';
import { Colors } from '../../constants/Colors';
import { MoreScreenProp } from './MoreScreen.types';

const menu = [
    {
        icon: 'pin-outline',
        title: 'Shipping address',
        value: '',
        onPress: () => { }
    },
    {
        icon: 'card-outline',
        title: 'Payment Method',
        value: '',
        onPress: () => { }
    },
    {
        icon: 'card-outline',
        title: 'Currency',
        value: 'USD',
        onPress: () => { }
    },
    {
        icon: 'language-outline',
        title: 'Language',
        value: 'English',
        onPress: () => { }
    },
]

const MoreScreen = () => {
    const navigation = useNavigation<MoreScreenProp>();
    return (
        <View style={styles.container}>
            <Text style={styles.header}>More</Text>
            <CardList data={menu} />
            <TouchableOpacity style={{
                marginTop: 60,
                alignSelf: "center"
            }}
                onPress={() => navigation.navigate('Auth')} >
                <Text style={{ color: Colors.primary }}>LOG OUT</Text>
            </TouchableOpacity>
        </View>
    )
}

export default MoreScreen

const styles = StyleSheet.create({
    container: {
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        marginHorizontal: 25,
    },
    header: {
        fontSize: 26,
        fontWeight: 'bold',
        marginVertical: 10,
        // marginHorizontal: 25,
        color: "#515c6f",
    }
})