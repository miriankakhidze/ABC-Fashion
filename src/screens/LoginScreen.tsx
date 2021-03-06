import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { Card, Input } from '../components';
import Button from '../components/Button/Button';
import { Colors } from '../constants/Colors';
import { RootStackParamList } from '../navigation/navigation.types';


type authScreenProp = StackNavigationProp<RootStackParamList, 'Auth'>;


const LoginScreen = () => {
    const navigation = useNavigation<authScreenProp>();
    return (
        <View style={{
            flex: 1,
            backgroundColor: '#F5F6F8'
        }}>
            <View style={{ marginVertical: 60, alignItems: "center" }}>
                <Text style={{ color: Colors.secondary, fontSize: 22 }}>ABC FASHION</Text>
            </View>
            <Card>
                <Input label="USERNAME / EMAIL" icon={<Icon name="user" size={30} color="grey" />} />
                <Input label='PASSWORD' secureTextEntry icon={<Icon name="lock" size={30} color="grey" />} />
            </Card>
            <Button type='default' title='LOG IN' icon='keyboard-arrow-right' onPress={() => navigation.navigate('Main')} />
            <Text style={{
                marginHorizontal: 50,
                position: "absolute",
                bottom: 40,
                color: Colors.secondary,
            }}>Don't have an account? Swipe right to <Text style={{ color: "#ff6969" }}>Create a new account</Text></Text>
        </View>
    )
}

export default LoginScreen