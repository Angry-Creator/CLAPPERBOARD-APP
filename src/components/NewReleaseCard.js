import { View, Text, StyleSheet, ImageBackground, FlatList } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function NewReleaseCard({ image, title, subTitle }) {
    return (
        <View style={styles.container}>
            <ImageBackground source={image} style={styles.ImageContainer} resizeMode="cover">
                <View style={styles.textContainer}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.subTitle}>{subTitle}</Text>
                </View>
                <View style={styles.ratingContainer}>
                    <View style={styles.starIconView}>
                        <MaterialIcons name="star" color={"gold"} size={18} />
                        <MaterialIcons name="star" color={"gold"} size={18} />
                        <MaterialIcons name="star" color={"gold"} size={18} />
                        <MaterialIcons name="star" color={"gold"} size={18} />
                        <MaterialIcons name="star" color={"gold"} size={18} />
                    </View>
                    <Text style={styles.subTitle}>From 342 Views</Text>
                </View>
            </ImageBackground>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: "#18181B",
        borderRadius: 20,
        overflow: "hidden",
        marginTop: 10,
    },
    ImageContainer: {
        width: "100%",
        height: 180,
        flexDirection: "row",
        alignItems: "flex-end",
    },
    textContainer: {
        flex: 0.5,
        paddingLeft: 15,
        paddingBottom: 10,
    },
    title: {
        color: "white",
        fontSize: 25,
        fontWeight: "700",
    },
    subTitle: {
        color: "#848484",
        fontSize: 12,
    },
    ratingContainer: {
        flex: 0.5,
        paddingRight: 15,
        paddingBottom: 10,
        justifyContent: "center",
        alignItems: "flex-end",
    },
    starIconView: {
        flexDirection: "row",
    }
});
