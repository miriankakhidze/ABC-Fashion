import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from 'react-native-vector-icons/MaterialIcons';
import DetailsScreen from "../screens/DetailsScreen";
import { HomeScreen } from "../screens/Home";
import { MainBottomTabParamList } from "./types";

const BottomTab = createBottomTabNavigator<MainBottomTabParamList>();

const MainScreen = () => {
    return (
        <BottomTab.Navigator>
            <BottomTab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="home" size={30} color="black" />),
                }}
            />

            <BottomTab.Screen name="Details" component={DetailsScreen} />
        </BottomTab.Navigator>
    )
}

export default MainScreen