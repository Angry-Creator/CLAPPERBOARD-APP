import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import ProfileImage from "./ProfileImage";


export default function Actor ({ image, nameOfActor, positionOfActor }) {
    return (
        <TouchableOpacity style={styles.container}>
            <View style={styles.imageWrapper}>
                <ProfileImage image={image} />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.name} numberOfLines={1}>{nameOfActor}</Text>
                <Text style={styles.position} numberOfLines={1}>{positionOfActor}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 155,
        height: 44,
        borderRadius: 50,
        marginLeft: 20,
        marginBottom: 15,
        flexDirection: "row",
        borderColor: "#5E5E5E",
        borderWidth: 2,
        alignItems: "center",
    },
    textContainer: {
        position: "relative",
        left: -10,
        width: 90,
        marginLeft: 5,
        flexDirection: "column",
        justifyContent: "center",
    },
    name: {
        color: "white",
        fontSize: 12,
    },
    position: {
        color: "white",
        fontSize: 10,
    },
    imageWrapper: {
        position: "relative",
        left:-10,
    }
})