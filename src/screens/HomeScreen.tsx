import React from 'react'
import { Button, Text, View } from 'react-native'

const HomeScreen = ({ navigation }: { navigation: any }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>HomeScreen</Text>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Details')}
            />
        </View>
    )
}

export default HomeScreen