import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { StyleSheet, View, Text, Platform, StatusBar, TextInput, Image} from 'react-native';

export default function SearchPage() {
  return (
    <View style={styles.SearchPageContainer}>
        <Text style={styles.textSearchContent}>Seach for content</Text>
        <LinearGradient style={styles.InputWrapper} start={[0,0]} end={[1,0]} locations={[0.3,0.7]} colors={['rgba(25, 161, 190, 0.6)', 'rgba(125, 65, 146, 0.6)']}>
                <View style={styles.Input}>
                    <TextInput style={styles.textInput} placeholder={'Search for a content.'} placeholderTextColor={'#6C6C6C'}/>
                </View>
        </LinearGradient>
        <Text style={styles.textCategories}>Categories.</Text>
        <Image resizeMode='cover' source={require('../../assets/images/image1.png')} style={styles.imageStyler}/>
        <Text style={[styles.textCategories, {marginBottom: 10}]}>Most Searched.</Text>
        <Image resizeMode='cover' source={require('../../assets/images/image2.png')} style={[styles.imageStyler, {marginBottom: 20}]}/>
        <Image resizeMode='cover' source={require('../../assets/images/image2.png')} style={styles.imageStyler}/>
    </View>
  )
}

const styles = StyleSheet.create({
    SearchPageContainer: {
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight + 35 : 0,
        backgroundColor: "#1A1A1D",
        paddingHorizontal: 20,
    },
    textSearchContent: {
        color: "white",
        fontSize: 18,
        fontWeight: "400",
        lineHeight: 25,
    },
    InputWrapper: {
        width: "100%",
        height: 50,
        marginTop: 15,
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center",
        padding: 2,
    },
    Input: {
        width: "100%",
        height: 45,
        marginTop: 0,
        backgroundColor: "#18181B",
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
    },
    textInput: {
        width: '90%',
        color: 'white',

    },
    textCategories: {
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 22,
        color: "white",
        marginTop: 20,
    },
    imageStyler: {
        width: '100%',
        height: 150,
    }
})