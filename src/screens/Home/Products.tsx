import React from 'react'
import { Dimensions, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Colors } from '../../constants/Colors';


const DATA = [
    {
        img: require('../../../assets/products/0001_fashion_image.jpg'),
        title: "PRoduct 1",
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
    img, title, price,
}: any) => {
    return (
        <TouchableOpacity style={styles.item}>
            <View style={{ flexDirection: 'row' }}>
                <Image style={styles.image} source={img} />
            </View>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.price}>${price}</Text>
        </TouchableOpacity>
    )
}

const Products = () => {
    return (
        <FlatList
            contentContainerStyle={{
                marginTop: 15,
                marginHorizontal: 15,
                alignItems: "center",
            }}
            horizontal
            showsVerticalScrollIndicator={false}
            data={DATA}
            renderItem={({ item }) => <ProductItem {...item} />}
            keyExtractor={(item) => item.img}
        />
    )
}

const styles = StyleSheet.create({
    item: {
        width: Screen.width * 0.28,
        backgroundColor: 'white',
        borderRadius: 15,
        marginHorizontal: 8,
        marginVertical: 8,
        paddingHorizontal: 8,
        paddingVertical: 10,
    },
    image: {
        flex: 1,
        resizeMode: 'contain',
        aspectRatio: 1,
        alignSelf: 'center'
    },
    title: {
        marginTop: 10,
        fontSize: 12,
        color: Colors.secondary
    },
    price: {
        fontSize: 15,
        marginTop: 5,
        fontWeight: 'bold',
        color: Colors.secondary
    }
})
export default Products