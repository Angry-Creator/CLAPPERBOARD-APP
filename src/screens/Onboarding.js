import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, Image, Platform} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


export default function Onboarding() {
    return (
        <View style={styles.container}>
            <Image style={styles.image} resizeMode="cover" source={require('../../assets/images/onboard_image.png')}/>
            <Text style={styles.title}>Onboarding</Text>
            <Text style={styles.subTitle}>Watch everything you want for free</Text>
            <LinearGradient style={styles.buttonWrapper} start={[0,0]} end={[1,0]} locations={[0.3,0.7]} colors={['rgba(25, 161, 190, 0.6)', 'rgba(125, 65, 146, 0.6)']}>
                <View style={styles.button}>
                    <Text style={{color: "white"}}>Enter Now</Text>
                </View>
            </LinearGradient>
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
    buttonWrapper:{
        width: 200,
        height: 40,
        marginTop: 20,
        borderRadius: 45,
        justifyContent: "center",
        alignItems: "center",
    },
    button: {
        width: 195,
        height: 35,
        marginTop: 0,
        backgroundColor: "#18181B",
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
    },
    borderRadient:{
        width: 155,
        height: 5,
    },
});