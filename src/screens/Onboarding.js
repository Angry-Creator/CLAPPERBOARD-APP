import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, Image, Platform} from 'react-native';
import GradientButton from '../components/GradientButton';


export default function Onboarding() {
    return (
        <View style={styles.container}>
            <Image style={styles.image} resizeMode="cover" source={require('../../assets/images/onboard_image.png')}/>
            <Text style={styles.title}>Onboarding</Text>
            <Text style={styles.subTitle}>Watch everything you want for free</Text>
            <GradientButton text={"Enter Now"}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#18181B",
        alignItems: "center",
        paddingTop: Platform.OS === "android" ? 20 : 0,
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
    borderRadient:{
        width: 155,
        height: 5,
    },
});