import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react'
import { Button, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { RootStackParamList } from '../navigation/types';


type authScreenProp = StackNavigationProp<RootStackParamList, 'Auth'>;


const LoginScreen = () => {
    const navigation = useNavigation<authScreenProp>();
    return (
        <View>
            <Text>LoginScreen</Text>
            <Button title="Go to Home" onPress={() => navigation.navigate('Main')} />
            <Icon name="animation" size={30} color="#900" />
        </View>
    )
}

export default LoginScreen