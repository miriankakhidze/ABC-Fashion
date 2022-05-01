import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Icon from 'react-native-vector-icons/AntDesign';
import MatIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { HeaderRight } from "../components";
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
                    headerBackground: () => null,
                    // headerShown: false,
                    // headerLeftLabelVisible: false,
                    headerTitle: () => null,
                    // title: "",
                    // headerLeft: () => null,
                    headerRight: () => <HeaderRight />,
                    tabBarActiveTintColor: "#ff6969",
                    tabBarIcon: ({ focused, color, size }) => (
                        <Icon name="home" size={24} color={focused ? '#ff6969' : 'grey'} />),
                }}
            />

            <BottomTab.Screen
                name="Search"
                component={DetailsScreen}
                options={{
                    tabBarActiveTintColor: "#ff6969",
                    tabBarIcon: ({ focused, color, size }) => (
                        <Icon name="search1" size={24} color={focused ? '#ff6969' : 'grey'} />),
                }} />

            <BottomTab.Screen
                name="Cart"
                component={DetailsScreen}
                options={{
                    tabBarActiveTintColor: "#ff6969",
                    tabBarIcon: ({ focused, color, size }) => (
                        <Icon name="shoppingcart" size={24} color={focused ? '#ff6969' : 'grey'} />),
                }} />

            <BottomTab.Screen
                name="Profile"
                component={DetailsScreen}
                options={{
                    tabBarActiveTintColor: "#ff6969",
                    tabBarIcon: ({ focused, color, size }) => (
                        <Icon name="user" size={24} color={focused ? '#ff6969' : 'grey'} />),
                }} />

            <BottomTab.Screen
                name="More"
                component={DetailsScreen}
                options={{
                    tabBarActiveTintColor: "#ff6969",
                    tabBarIcon: ({ focused, color, size }) => (
                        <MatIcon name="menu" size={24} color={focused ? '#ff6969' : 'grey'} />),
                }} />
        </BottomTab.Navigator>
    )
}

export default MainScreen