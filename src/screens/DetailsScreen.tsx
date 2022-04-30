import React from 'react'
import { View, Text, Button } from 'react-native'

const DetailsScreen = ({ navigation }: { navigation: any }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>DetailsScreen</Text>
            <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
            <Button title="Go back" onPress={() => navigation.goBack()} />
        </View>
    )
}

export default DetailsScreen