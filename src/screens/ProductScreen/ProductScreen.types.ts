import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { CompositeNavigationProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { MainBottomTabParamList, RootStackParamList } from "../../navigation/navigation.types";

export type ProductScreenScreenProp = CompositeNavigationProp<
    StackNavigationProp<RootStackParamList, 'Main'>,
    BottomTabNavigationProp<MainBottomTabParamList, 'ProductScreen'>
>;