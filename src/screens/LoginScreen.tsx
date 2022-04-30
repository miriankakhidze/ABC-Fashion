import React from 'react'
import { Button, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';

const LoginScreen = ({ navigation }: any) => {
    return (
        <View>
            <Text>LoginScreen</Text>
            <Button title="Go to Home" onPress={() => navigation.navigate('Main')} />
            <Icon name="animation" size={30} color="#900" />
        </View>
    )
}

export default LoginScreen