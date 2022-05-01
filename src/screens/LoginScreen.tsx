import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { Card, Input } from '../components';
import Button from '../components/Button/Button';
import { RootStackParamList } from '../navigation/types';


type authScreenProp = StackNavigationProp<RootStackParamList, 'Auth'>;


const LoginScreen = () => {
    const navigation = useNavigation<authScreenProp>();
    return (
        <View style={{
            flex: 1
        }}>
            <View style={{ marginVertical: 60, alignItems: "center" }}>
                <Text>ABC Fashion</Text>
            </View>
            <Card>
                <Input label="USERNAME / EMAIL" icon={<Icon name="user" size={30} color="grey" />} />
                <Input label='PASSWORD' secureTextEntry icon={<Icon name="lock" size={30} color="grey" />} />
            </Card>
            <Button type='default' title='LOG IN' icon='keyboard-arrow-right' onPress={() => navigation.navigate('Main')} />
            <Text style={{
                marginHorizontal: 50,
                position: "absolute",
                bottom: 40
            }}>Don't have an account? Swipe right to <Text style={{ color: "#ff6969" }}>Create a new account</Text></Text>
        </View>
    )
}

export default LoginScreen