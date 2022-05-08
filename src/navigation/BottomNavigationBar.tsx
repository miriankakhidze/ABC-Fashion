import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import Icon from 'react-native-vector-icons/AntDesign';
import MatIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { HeaderRight } from "../components";
import { Colors } from "../constants/Colors";
import { CartScreen } from "../screens/Cart";
import { HomeScreen } from "../screens/Home";
import { MoreScreen } from "../screens/More";
import { ProfileScreen } from "../screens/Profile";
import { SearchScreen } from "../screens/Search";
import { MainBottomTabParamList } from "./navigation.types";

const BottomTab = createBottomTabNavigator<MainBottomTabParamList>();

const MainScreen = () => {
    const navigation = useNavigation()
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
                component={SearchScreen}
                options={{
                    // headerLeft: ({ tintColor }) => <Icon.Button
                    //     name="left"
                    //     backgroundColor={'transparent'}
                    //     // selectionColor='transparent'
                    //     underlayColor={'transparent'}
                    //     size={24}
                    //     color={Colors.primary}
                    //     onPress={() => { navigation.navigate('Home' as any) }}
                    // />,
                    // headerRight: ({ tintColor }) => <Icon.Button
                    //     name="filter"
                    //     backgroundColor={'transparent'}
                    //     // selectionColor='transparent'
                    //     underlayColor={'transparent'}
                    //     size={24}
                    //     color={Colors.secondary}
                    //     onPress={() => { navigation.navigate('Home' as any) }}
                    // />,
                    // headerTitleAlign: 'center',
                    // headerTitle: () => <TextInput style={{ backgroundColor: 'grey', width: "100%" }} />,
                    headerShown: false,
                    tabBarStyle: { display: 'none' },
                    tabBarActiveTintColor: Colors.tabBarActiveTintColor,
                    tabBarIcon: ({ focused, color, size }) => (
                        <Icon name="search1" size={24} color={focused ? Colors.tabBarActiveTitleColor : 'grey'} />),
                }} />

            <BottomTab.Screen
                name="Cart"
                component={CartScreen}

                options={{
                    tabBarActiveTintColor: Colors.tabBarActiveTintColor,
                    headerBackground: () => null,
                    headerLeft: ({ tintColor }) => <Icon.Button
                        name="left"
                        backgroundColor={'transparent'}
                        // selectionColor='transparent'
                        underlayColor={'transparent'}
                        size={24}
                        color={Colors.primary}
                        onPress={() => { navigation.navigate('Home' as any) }}
                    />,
                    headerTitle: () => null,
                    headerRight: () => <HeaderRight />,
                    tabBarStyle: { display: 'none' },
                    tabBarIcon: ({ focused, color, size }) => (
                        <Icon name="shoppingcart" size={24} color={focused ? Colors.tabBarActiveTitleColor : 'grey'} />),
                    tabBarBadge: 4
                }} />

            <BottomTab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    tabBarActiveTintColor: Colors.tabBarActiveTintColor,
                    headerBackground: () => null,
                    headerTitle: () => null,
                    headerRight: () => <HeaderRight />,
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