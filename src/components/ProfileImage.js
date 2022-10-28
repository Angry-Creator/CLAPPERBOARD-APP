import { View, Text, StyleSheet, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function ProfileImage({image}) {
  return (
    <LinearGradient style={styles.gradientContainer} start={{x:0, y:0}} end={{x:1,y:0}} locations={[0.3,0.7]} colors={['rgba(25, 161, 190, 0.6)', 'rgba(125, 65, 146, 0.6)']}>
        <View style={styles.imageContainer}>
          <Image source={image} resizeMode="cover" style={{width: "100%", height: "100%"}}/>
        </View>
    </LinearGradient>
  )
}


const styles = StyleSheet.create({
    gradientContainer: {
        height: 50,
        width: 50,
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
    },
    imageContainer: {
        height: 45,
        width: 45,
        borderRadius: 55,
        overflow: "hidden",
    }
});