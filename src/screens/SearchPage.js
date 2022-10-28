import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, View, Text, Platform, StatusBar, TextInput, Image, FlatList } from 'react-native';
import CategoryCard from '../components/CategoryCard';
import MovieCard from '../components/MovieCard';

export default function SearchPage() {
    //Recommeded Movie Data
    const recommendedMovieData1 = [
        { title: "DORA", subTitle: "2022", image: require("../../assets/images/dora.jpg") },
        { title: "Black Panther", subTitle: "2022", image: require("../../assets/images/blackpanther.jpg") },
        { title: "Avengers: Infinity War", subTitle: "2022", image: require("../../assets/images/infinitywar.jpg") },
        { title: "Secret War", subTitle: "2022", image: require("../../assets/images/secret-war.png") }
    ];
    const recommendedMovieData2 = [
        { title: "DORA", subTitle: "2022", image: require("../../assets/images/dora.jpg") },
        { title: "Black Panther", subTitle: "2022", image: require("../../assets/images/blackpanther.jpg") },
        { title: "Avengers: Infinity War", subTitle: "2022", image: require("../../assets/images/infinitywar.jpg") },
        { title: "Secret War", subTitle: "2022", image: require("../../assets/images/secret-war.png") }
    ];

    //Recommended Movie Item rendering arror function
    const renderOthersItem = ({ item }) => {
        return (
            <MovieCard title={item.title} subTitle={item.subTitle} image={item.image} progress={item.progress} />
        )
    }

    //Rendering Flatlist seperator conponent arror function
    const renderDataItemSeperator = () => {
        return (
            <View style={{ width: 10 }}></View>
        )
    }

    return (
        <View style={styles.SearchPageContainer}>
            <Text style={styles.textSearchContent}>Seach for content</Text>
            <LinearGradient style={styles.InputWrapper} start={[0, 0]} end={[1, 0]} locations={[0.3, 0.7]} colors={['rgba(25, 161, 190, 0.6)', 'rgba(125, 65, 146, 0.6)']}>
                <View style={styles.Input}>
                    <TextInput style={styles.textInput} placeholder={'Search for a content.'} placeholderTextColor={'#6C6C6C'} />
                </View>
            </LinearGradient>
            <Text style={styles.textCategories}>Categories.</Text>

            {/* <Image resizeMode='cover' source={require('../../assets/images/image1.png')} style={styles.imageStyler} /> */}
            <View style={{flexDirection: "row"}}>
                <CategoryCard reverse={false} text={"Movie"} subText={"532 Titiles"}/>
                <CategoryCard reverse={true} text={"Anime"} subText={"532 Titiles"} backgroundColor={['#FF2E2E', '#E08939']}/>
            </View>

            <Text style={[styles.textCategories, { marginBottom: 10 }]}>Most Searched.</Text>
            <View>
                <FlatList style={{ paddingVertical: 10, marginBottom: 5 }} data={recommendedMovieData1} renderItem={renderOthersItem} ItemSeparatorComponent={renderDataItemSeperator} horizontal={true} />
                <FlatList style={{ paddingVertical: 10 }} data={recommendedMovieData2} renderItem={renderOthersItem} ItemSeparatorComponent={renderDataItemSeperator} horizontal={true} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    SearchPageContainer: {
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight + 30 : 0,
        backgroundColor: "#1A1A1D",
        paddingHorizontal: 20,
    },
    textSearchContent: {
        color: "white",
        fontSize: 18,
        fontWeight: "400",
        lineHeight: 25,
    },
    InputWrapper: {
        width: "100%",
        height: 50,
        marginTop: 15,
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center",
        padding: 2,
    },
    Input: {
        width: "100%",
        height: 45,
        marginTop: 0,
        backgroundColor: "#18181B",
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
    },
    textInput: {
        width: '90%',
        color: 'white',

    },
    textCategories: {
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 22,
        color: "#E8E8E8",
        marginTop: 15,
    },
    imageStyler: {
        width: '100%',
        height: 150,
    },
})