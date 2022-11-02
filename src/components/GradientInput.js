import { LinearGradient } from "expo-linear-gradient";
import { View, StyleSheet, TextInput } from "react-native";

export default function GradientInput({ text, onPress }) {
    return (
        <View style={styles.container}>
            <LinearGradient style={styles.gradientContainer} start={[0, 0]} end={[1, 0]} locations={[0.3, 0.7]} colors={['rgba(25, 161, 190, 0.6)', 'rgba(125, 65, 146, 0.6)']}>
                <View style={styles.contentContainer}>
                    <TextInput keyboardType="default" style={{ fontSize: 14, color: "white", height: "100%" }} placeholder="Search for a content" placeholderTextColor={"#6C6C6C"} />
                </View>
            </LinearGradient>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {},
    gradientContainer: {
        height: 50,
        borderRadius: 25,
        padding: 2,
    },
    contentContainer: {
        height: "100%",
        backgroundColor: "#18181B",
        borderRadius: 23,
        justifyContent: "center",
        padding: 10,
    }
})