import { View, StyleSheet, Text } from "react-native";
import MoviesApi from "../Networking/MoviesApi";

export default function PlayingWithAxios(){
    const callApi = async () => {
        const result = await MoviesApi.TestRoute();
        console.log(result);
    }
    callApi();
    return(
        <View>
            <Text>Hello</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
})