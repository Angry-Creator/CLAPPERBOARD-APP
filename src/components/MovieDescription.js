import { View, Text, StyleSheet, ScrollView } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import Rating from "./Rating";

export default function MovieDescription({ title, subTitle, descText }) {
    return (
        <View style={styles.container}>
            <View style={styles.HeaderContainer}>
                <View style={styles.textContainer}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.subTitle}>{subTitle}</Text>
                </View>
                <View style={styles.ratingContainer}>
                    <Rating/>
                    <Text style={styles.subTitle}>From 342 Views</Text>
                </View>
            </View>
            <ScrollView>
                <Text style={styles.DescriptionText}>{descText}</Text>
            </ScrollView>

        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        paddingVertical: 5,
        overflow: "hidden",
        alignItems: "center",
    },
    HeaderContainer: {
        width: "100%",
        flexDirection: "row",
    },
    DescriptionText: {
        paddingVertical: 10,
        paddingHorizontal: 15,
        color: "#8F8F8F",

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
