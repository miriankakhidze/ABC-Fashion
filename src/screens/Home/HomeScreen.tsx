import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button, Text, View } from 'react-native';
import { HomeScreenProp } from './HomeScreen.types';

const HomeScreen = () => {
    const navigation = useNavigation<HomeScreenProp>();

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>HomeScreen</Text>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Cart')}
            />
        </View>
    )
}

export default HomeScreen