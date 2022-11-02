import { View, StyleSheet, Image, TouchableOpacity, Text } from "react-native";


export default function ContinueWatchingCard({ image, title, subTitle, progress, onPressAction }) {
    return (
        <TouchableOpacity style={styles.container} onPress={onPressAction}>
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
        width: 150,
    },
    imageContainer: {
        position: "relative",
        width: 150,
        height: 104,
        overflow: "hidden",
        borderRadius: 10,
    },
    image: {
        width: "100%",
        height: "100%",
    },
    progressBar: {
        position: "absolute",
        bottom: 0,
        height: 2,
        backgroundColor: "red",
    },
    textContainer: {
        paddingHorizontal: 10,
        paddingTop: 2,
        paddingBottom: 2,
    },
    title:{
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