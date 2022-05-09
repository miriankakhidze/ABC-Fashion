import React from 'react';
import { Dimensions, FlatList, ImageBackground, StyleSheet, Text, View } from 'react-native';
import Button from '../../components/Button/Button';

const DATA = [
    {
        img: require('../../../assets/products/0001_fashion_image.jpg'),
        title: "For all your summer clothing needs",
        price: "24.25",
        rating: 2.54
    },
    {
        img: require('../../../assets/products/0002_fashion_image.jpg'),
        title: "PRoduct 1",
        price: "24.25",
        rating: 2.54
    },
    {
        img: require('../../../assets/products/0003_fashion_image.jpg'),
        title: "PRoduct 1",
        price: "24.25",
        rating: 2.54
    },
]

const Screen = Dimensions.get('window');

const ProductItem = ({
    img, title
}: any) => {
    return (
        <View style={styles.item} >
            <ImageBackground source={img} resizeMode="cover" style={styles.image} imageStyle={{ borderRadius: 15 }}>
                <Text style={styles.title}>{title}</Text>
                <Button type='default' title='SEE MORE' icon='keyboard-arrow-right' onPress={() => null} />
            </ImageBackground>
        </View>
    )
}

const Latest = () => {
    return (
        <View style={{ marginLeft: 15 }}>
            <Text style={styles.header}>Latest</Text>
            <View style={styles.container}>
                <FlatList
                    data={DATA}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => <ProductItem {...item} />}
                    keyExtractor={(item) => item.img}
                />
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    header: {
        fontSize: 26,
        fontWeight: 'bold',
        marginVertical: 10,
        color: "#515c6f",
    },
    item: {
        width: Screen.width * 0.8,
        height: Screen.height * 0.3,
        marginHorizontal: 8,
        marginVertical: 8,
    },
    image: {
        borderRadius: 15,
        flex: 1,
        justifyContent: "space-between",
        paddingVertical: 30,
        paddingHorizontal: 30,

    },
    title: {
        color: 'white',
        fontSize: 28,
        marginTop: 10,
    },
    price: {
        fontSize: 15,
        marginTop: 5,
        fontWeight: 'bold'
    }
})
export default Latest