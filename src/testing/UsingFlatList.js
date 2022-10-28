import { FlatList, Image, StyleSheet, Text, View } from "react-native";
//Creating a list

const actions = ["Login", "Sign Up", "Forgot Password", "Logout"];

export default function UsingFlatList(){
    const flatListItem = ({item}) =>{
        return <Text>Hello {item}</Text>
    }
    return(
        <View style={styles.container}>
            <Text>Holla</Text>
            <FlatList data={actions} renderItem={flatListItem}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        paddingTop: 100,
    }
})