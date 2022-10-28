import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function CategoryCard({text, subText, backgroundColor = ['#16CAF1', 'rgba(1, 67, 167, 0.9)'], reverse}) {
    let textStyle = {left: 70};
    let subTextStyle = {left: 65};
    let gradientLeftStyle = -50;
    let gradientStyle = [
        {rotateY : "-45deg"},
        {rotateZ : "-3deg"},
    ];
    if(reverse === true){
        textStyle = {left: 50};
        subTextStyle = {left: 45};
        gradientLeftStyle = -10;
        gradientStyle = [
            {rotateY : "45deg"},
            {rotateZ : "3deg"},
        ];
    }
    return (
        <View style={styles.container}>
            <LinearGradient style={[styles.LinearGradientContainer, {
                left: gradientLeftStyle,
                transform: gradientStyle}]
                } start={[0.5, 0]} end={[0.5, 1]} locations={[0.1, 0.9]} colors={backgroundColor} />
            <Text style={[styles.text,
            textStyle
            ]} numberOfLines={1}>{text}</Text>
            <Text style={[styles.subText,
            subTextStyle,
            ]} numberOfLines={1}>{subText}</Text>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 150,
        height: 110,
        marginVertical: 10,
    },
    LinearGradientContainer: {
        position: "relative",
        top: 10,
        width: 220,
        height: 110,
        borderRadius: 20,
    },
    text: {
        fontSize: 16,
        fontWeight: "700",
        color: "white",
        lineHeight: 23,
        width: 50,
        position: 'absolute',
        top: 20,
    },
    subText: {
        fontSize: 12,
        fontWeight: "700",
        color: "white",
        lineHeight: 23,
        width: 60,
        position: 'absolute',
        top: 40,
    }
})