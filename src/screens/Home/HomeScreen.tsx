import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button, ScrollView, Text, View } from 'react-native';
import Categories from './Categories';
import { HomeScreenProp } from './HomeScreen.types';
import Latest from './Latest';
import Products from './Products';

const HomeScreen = () => {
    const navigation = useNavigation<HomeScreenProp>();

    return (
        <View style={{
            flex: 1,
            // marginHorizontal: 15,
        }}>
            <ScrollView style={{
                // paddingLeft: 15
            }}>
                <Categories />
                <Latest />
                <Products />
            </ScrollView>
        </View >
    )
}

export default HomeScreen