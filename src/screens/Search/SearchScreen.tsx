import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Dimensions, FlatList, Image, StyleSheet, Text, TextInput, View } from 'react-native';
import { HeaderRight } from '../../components';
import { Colors } from '../../constants/Colors';
import { SearchScreenProp } from './SearchScreen.types';
import Icon from 'react-native-vector-icons/AntDesign';


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
    {
        img: require('../../../assets/products/0004_fashion_image.jpg'),
        title: "PRoduct 1",
        price: "24.25",
        rating: 2.54
    },
    {
        img: require('../../../assets/products/0005_fashion_image.jpg'),
        title: "PRoduct 1",
        price: "24.25",
        rating: 2.54
    },
    {
        img: require('../../../assets/products/0006_fashion_image.jpg'),
        title: "PRoduct 1",
        price: "24.25",
        rating: 2.54
    }
]
const Screen = Dimensions.get('window');

const ItemCard = ({
    img, title, price, rating
}: any) => {
    return (
        <View style={styles.item}>
            <View style={{ flexDirection: 'row' }}>
                <Image style={styles.image} source={img} />
            </View>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.price}>{price}</Text>
        </View>
    )
}


const SearchScreen = () => {
    const navigation = useNavigation<SearchScreenProp>();

    return (
        <View style={styles.container}>
            <View style={{
                // flex: 1,
                flexDirection: "row",
                justifyContent: "space-between",
                paddingHorizontal: 10,
                paddingVertical: 20,
                backgroundColor: "white",
                // flexGrow: 1
            }}>
                <View>
                    <Icon.Button
                        name="left"
                        backgroundColor={'transparent'}
                        // selectionColor='transparent'
                        underlayColor={'transparent'}
                        size={24}
                        color={Colors.primary}
                        onPress={() => { navigation.navigate('Home') }}
                    />
                </View>
                <View style={{
                    flex: 1
                    // width: "100%",
                }}>
                    <TextInput style={{
                        // flex: 1,
                        paddingLeft: 25,
                        height: 35,
                        borderRadius: 25,
                        backgroundColor: "#eeeef1",
                        // width: "100%",
                    }} />
                </View>
                <View>
                    <Icon.Button
                        name="filter"
                        backgroundColor={'transparent'}
                        // selectionColor='transparent'
                        underlayColor={'transparent'}
                        size={24}
                        color={Colors.secondary}
                        onPress={() => null}
                    />
                </View>
            </View>
            <View style={{
                backgroundColor: 'white',
                // paddingVertical: 8
            }}>
                <FlatList
                    style={{
                        paddingBottom: 15
                    }}
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    data={['best match', 'top rated', 'price low-high', 'price high-low']}
                    renderItem={({ item, index }) => <Text style={{ fontSize: 14, textTransform: 'uppercase', marginHorizontal: 8 }}>{item}</Text>}
                />
            </View>
            <View style={{
                // flex: 1,
                // flexDirection: 'row'
            }}>

                <FlatList
                    contentContainerStyle={{
                        paddingBottom: 200,
                        marginTop: 15,
                        marginHorizontal: 15,
                        alignItems: "center",
                    }}
                    numColumns={2}
                    data={DATA}
                    renderItem={({ item }) => <ItemCard {...item} />}
                    keyExtractor={(item) => item.img}
                // renderItem={({ item: { img, title, price, rating } }) =>
                //     <View style={styles.item} >
                //         <Image source={img} style={{ width: 120, height: 200, }} />
                //         <Text>{title}</Text>
                //         <Text>{price}</Text>
                //         <Text>{rating}</Text>
                //     </View>
                // }
                />
            </View>
        </View>
    )
}

export default SearchScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        width: Screen.width * 0.4,
        backgroundColor: 'white',
        borderRadius: 15,
        marginHorizontal: 8,
        marginVertical: 8,
        padding: 25
    },
    image: {
        flex: 1,
        resizeMode: 'contain',
        aspectRatio: 1,
        alignSelf: 'center'
    },
    title: {
        marginTop: 10,
        fontSize: 15
    },
    price: {
        fontSize: 15,
        marginTop: 5,
        fontWeight: 'bold'
    }
})
