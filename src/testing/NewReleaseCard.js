import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import { Rating } from 'react-native-ratings';

export default function NewReleaseCard() {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../assets/images/infinitywar.jpg')} style={styles.ImageBackground} resizeMode="cover" blurRadius={1} >
        <View style={styles.textContainer}>
            <View style={styles.textsection}>
                <Text style={styles.title}>Avengers</Text>
                <Text style={styles.subTitle}>Marvel Studio</Text>
            </View>
            <View style={styles.ratingSection}>
                <Rating imageSize={25} tintColor="indigo"/>
                <Text style={styles.ratingText}>From 342 users</Text>
            </View>
        </View>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        height: 150,
        backgroundColor: "rgba(24,24,27,0.5)",
        borderRadius: 20,
        overflow: "hidden",
        marginTop: 10,
    },
    ImageBackground: {
        height: "100%",
        width: "100%",
        justifyContent: "flex-end",
    },
    textContainer: { 
        height: 60, 
        width: "100%", 
        flexDirection: "row"
    },
    textsection: {
        paddingLeft: 10,
        flexGrow: 1,
    },
    title: {
        color: "white",
        fontSize: 20,
    },
    subTitle: {
        color: "white",
    },
    ratingSection: {
        justifyContent: "flex-end",
        paddingRight: 10,
    },
    ratingText: {
        fontSize: 15,
        fontWeight: "400",
        color: "white",
    }
})