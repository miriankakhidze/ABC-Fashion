import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { ScrollView, View } from 'react-native';
import Categories from './Categories';
import { HomeScreenProp } from './HomeScreen.types';
import Latest from './Latest';
import Products from './Products';

const HomeScreen = () => {
    const navigation = useNavigation<HomeScreenProp>();

    return (
        <View style={{
            flex: 1,
            backgroundColor: '#F5F6F8'
        }}>
            <ScrollView>
                <Categories />
                <Latest />
                <Products />
            </ScrollView>
        </View >
    )
}

export default HomeScreen