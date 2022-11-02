import { View, StyleSheet, Image, Text, TextInput } from "react-native";
import GradientInput from "../components/GradientInput";

export default function SearchPage() {
    return (
        <View style={styles.container}>
            <Text style={styles.searchText}>Search for a content</Text>
            <GradientInput />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 35,
        margin: 20,
        // backgroundColor: "#18181B",
    },
    searchText: {
        fonSize: 16,
        fontWeight: "bold",
    }
})