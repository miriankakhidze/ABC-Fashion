import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Icon from 'react-native-vector-icons/AntDesign';
import MatIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { HeaderRight } from "../components";
import { Colors } from "../constants/Colors";
import DetailsScreen from "../screens/DetailsScreen";
import { HomeScreen } from "../screens/Home";
import { MoreScreen } from "../screens/More";
import { MainBottomTabParamList } from "./navigation.types";

const BottomTab = createBottomTabNavigator<MainBottomTabParamList>();

const MainScreen = () => {
    return (
        <BottomTab.Navigator>
            <BottomTab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    headerBackground: () => null,
                    headerTitle: () => null,
                    headerRight: () => <HeaderRight />,
                    tabBarActiveTintColor: Colors.tabBarActiveTintColor,
                    tabBarIcon: ({ focused, color, size }) => (
                        <Icon name="home" size={24} color={focused ? Colors.tabBarActiveTitleColor : 'grey'} />),
                }}
            />

            <BottomTab.Screen
                name="Search"
                component={DetailsScreen}
                options={{
                    tabBarActiveTintColor: Colors.tabBarActiveTintColor,
                    tabBarIcon: ({ focused, color, size }) => (
                        <Icon name="search1" size={24} color={focused ? Colors.tabBarActiveTitleColor : 'grey'} />),
                }} />

            <BottomTab.Screen
                name="Cart"
                component={DetailsScreen}
                options={{
                    tabBarActiveTintColor: Colors.tabBarActiveTintColor,
                    tabBarIcon: ({ focused, color, size }) => (
                        <Icon name="shoppingcart" size={24} color={focused ? Colors.tabBarActiveTitleColor : 'grey'} />),
                    tabBarBadge: 4
                }} />

            <BottomTab.Screen
                name="Profile"
                component={DetailsScreen}
                options={{
                    tabBarActiveTintColor: Colors.tabBarActiveTintColor,
                    tabBarIcon: ({ focused, color, size }) => (
                        <Icon name="user" size={24} color={focused ? Colors.tabBarActiveTitleColor : 'grey'} />),
                }} />

            <BottomTab.Screen
                name="More"
                component={MoreScreen}
                options={{
                    headerBackground: () => null,
                    headerTitle: () => null,
                    headerRight: () => <HeaderRight />,
                    tabBarActiveTintColor: Colors.tabBarActiveTintColor,
                    tabBarIcon: ({ focused, color, size }) => (
                        <MatIcon name="menu" size={24} color={focused ? Colors.tabBarActiveTitleColor : 'grey'} />),
                }} />
        </BottomTab.Navigator>
    )
}

export default MainScreen