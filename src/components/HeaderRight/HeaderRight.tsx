import React, { FC } from 'react'
import { View } from 'react-native'
import IonIcon from 'react-native-vector-icons/Ionicons'
import { Badge } from '../Badge'
import { HeaderRightProps } from './types'

const HeaderRight: FC<HeaderRightProps> = () => {
    return (
        <View style={{
            width: 90,
            flexDirection: 'row',
            justifyContent: "space-around",
            alignItems: "center",
        }}>
            <Badge value={5}>
                <IonIcon.Button backgroundColor={'transparent'} name="chatbubble-outline" size={24} color="grey" onPress={() => console.log("Sdsa")} />
            </Badge>
            <Badge value={10}>
                <IonIcon.Button backgroundColor={'transparent'} name="notifications-outline" size={24} color="grey" onPress={() => console.log("Sdsa")} />
            </Badge>
        </View>
    )
}

export default HeaderRight