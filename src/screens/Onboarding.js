import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, Image} from 'react-native';


export default function Onboarding() {
    return (
        <View style={styles.container}>
            <Image style={styles.image} resizeMode="cover" source={require('../../assets/images/onboard_image.png')}/>
            <Text style={styles.title}>Onboarding</Text>
            <Text style={styles.subTitle}>Watch everything you want for free</Text>
            <View style={styles.button}>
                <Text style={{color: "white"}}>Enter Now</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#18181B",
        alignItems: "center",
        paddingTop: 20,
    },
    image: {
        height: 490,
        width: "100%",
    },
    title: {
        color: "white",
        fontSize: 32,
        fontWeight: "700",
        textAlign: "center",
        lineHeight: 52,
    },
    subTitle: {
        color: "white",
        fontSize: 16,
        fontWeight: "400",
        textAlign: "center",
        lineHeight: 25,
        width: 210,
    },
    button: {
        width: 200,
        height: 40,
        marginTop: 20,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 45,
        backgroundColor: "dodgerblue",
    }
});