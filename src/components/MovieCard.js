import { View, StyleSheet, Image, TouchableOpacity, Text } from "react-native";


export default function MovieCard({ image, title, subTitle, progress }) {
    return (
        <TouchableOpacity style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={image} style={styles.image} resizeMode={"cover"} />
                <View style={[styles.progressBar, { width: progress }]}></View>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.title} numberOfLines={1}>{title}</Text>
                <Text style={styles.subTitle} numberOfLines={1}>{subTitle}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 120,
    },
    imageContainer: {
        position: "relative",
        width: 120,
        height: 110,
        overflow: "hidden",
        borderRadius: 15,
    },
    image: {
        width: "100%",
        height: "100%",
    },
    progressBar: {
        position: "absolute",
        bottom: 1,
        height: 2,
        backgroundColor: "red",
    },
    textContainer: {
        paddingTop: 5,
        paddingBottom: 2,
        alignItems: "center",
    },
    title: {
        fontSize: 12,
        color: "white",
        fontWeight: "700",
    },
    subTitle: {
        fontSize: 12,
        color: "white",
        fontWeight: "400",
    }
})