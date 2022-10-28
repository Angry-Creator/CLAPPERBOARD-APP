import { StyleSheet, Platform, StatusBar, SafeAreaView, View, Text, TouchableOpacity } from "react-native";
import ProfileImage from "../components/ProfileImage";
import { MaterialIcons } from "@expo/vector-icons";
import NewReleaseCard from "./NewReleaseCard";

export default function Dashboard2() {
    return (
        <SafeAreaView style={styles.container}>
            {/* Header Section */}
            <View style={styles.headerSection}>
                {/* ProfileImage */}
                <TouchableOpacity style={styles.headerImageSection}>
                    <ProfileImage />
                </TouchableOpacity>
                {/* Text Section */}
                <View style={styles.headerTextSection}>
                    <Text style={styles.headerTitle}>Welcome back</Text>
                    <Text style={styles.headerSubTitle}>Maria</Text>
                </View>
                {/* Button Section */}
                <TouchableOpacity style={styles.headerBtnSection}>
                    <MaterialIcons name="dehaze" size={30} color={"white"} />
                </TouchableOpacity>
            </View>

            {/* New Release */}
            <View>
                <Text style={styles.newReleaseText}>New Release</Text>
            </View>
            <NewReleaseCard />

            {/* Continue Watching */}
            <View>
                <Text style={styles.continueWatchingText}>Continue Watching</Text>
            </View>
            
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        paddingHorizontal: 10,
        backgroundColor: "#18181B",
    },
    headerSection: { flexDirection: "row" },
    headerImageSection: { width: 60 },
    headerTextSection: {
        flexGrow: 1,
        width: 60,
        justifyContent: "center",
        paddingLeft: 10,
    },
    headerBtnSection: {
        width: 60,
        justifyContent: "center",
        alignItems: "flex-end",
    },
    headerTitle: {
        color: "white",
        fontWeight: "600",
        fontSize: 20,
    },
    headerSubTitle: {
        color: "white",
        fontWeight: "400",
        fontSize: 15,
    },
    newReleaseText: {
        color: "#E8E8E8",
        fontSize: 14,
        fontWeight: "400",
        marginTop: 25,
    },
    continueWatchingText: {
        fontSize: 14,
        fontWeight: "400",
        color: "#E8E8E8",
        marginTop: 15,
    }
});