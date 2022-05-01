import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { CardList } from '../../components';
import Button from '../../components/Button/Button';
import { Colors } from '../../constants/Colors';
import { ProfileScreenProp } from './ProfileScreen.types';


const menu1 = [
    {
        icon: 'list-outline',
        title: 'All My Orders',
        value: '',
        onPress: () => { }
    },
    {
        icon: 'card-outline',
        title: 'Pending Shipments',
        value: '',
        onPress: () => { }
    },
    {
        icon: 'card-outline',
        title: 'Pending Payments',
        value: '',
        onPress: () => { }
    },
    {
        icon: 'language-outline',
        title: 'Finished Orders',
        value: '',
        onPress: () => { }
    },
]
const menu2 = [
    {
        icon: 'mail-open-outline',
        title: 'Invite Friends',
        value: '',
        onPress: () => { }
    },
    {
        icon: 'card-outline',
        title: 'Customer Support',
        value: '',
        onPress: () => { }
    },
    {
        icon: 'star-outline',
        title: 'Rate Our App',
        value: '',
        onPress: () => { }
    },
    {
        icon: 'create-outline',
        title: 'Make a Suggestion',
        value: '',
        onPress: () => { }
    },
]

const ProfileScreen = () => {
    const navigation = useNavigation<ProfileScreenProp>();

    return (
        <View style={styles.container}>
            <View style={{ marginVertical: 20, flexDirection: "row", justifyContent: "center", alignItems: "center", }}>
                <Image style={styles.image} source={{ uri: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" }} />
                <View style={{ marginLeft: 20 }}>
                    <Text style={{ marginBottom: 5, color: Colors.secondary }}>croner@gmail.com</Text>
                    <Button type='outlined' title='EDIT PROFILE' />
                </View>
            </View>
            <CardList data={menu1} />
            <CardList data={menu2} />

        </View>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({
    container: {
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        marginHorizontal: 25,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
    }
    // header: {
    //     fontSize: 26,
    //     fontWeight: 'bold',
    //     marginVertical: 10,
    //     color: "#515c6f",
    // }
})