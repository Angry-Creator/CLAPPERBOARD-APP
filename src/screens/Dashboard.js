import { Platform, StatusBar, StyleSheet, View, Text, ImageBackground } from 'react-native';
import CustomText from '../components/CustomText';
import ImageWrapper from '../components/ImageWrapper';
import MovieWrapper from '../components/MovieWrapper';

export default function Dashboard() {
  const profile_image = require('../../assets/images/profile_image.png');
  const lines = require('../../assets/images/lines.png');
  const studioImage = require('../../assets/images/studio_image.png');
  const starsImage = require("../../assets/images/stars.png");
  const movieImage1 = require("../../assets/images/movie_image1.png");
  const movieImage2 = require("../../assets/images/movie_image2.png");
  const movieImage3 = require("../../assets/images/movie_image1.png");
  const movieImage4 = require("../../assets/images/movie_image4.png");
  const movieImage5 = require("../../assets/images/movie_image5.png");
  return (
    <View style={styles.DashboardContainer}>

      <View style={styles.headerStyle}>
        <ImageWrapper src={profile_image}/>
        <View style={styles.headerTextView}>
          <CustomText customizedFontSize={17} customizedMarginBottom={6} text={"Welcome Back"} customizedFontWeight={"300"}/>
          <CustomText customizedFontSize={20} customizedFontWeight={"500"} text={"Maria"} />
        </View>
        <ImageWrapper src={lines} customizedWidth={25} customizedHeight={20} customizedMarginLeft={"auto"}/>
      </View>
        <CustomText text={"New Release"} customizedMarginTop={15} customizedFontWeight={"300"}/>
        <ImageBackground source={studioImage} style={styles.studioImageStyle}>
          <View style={styles.studioStyle}>
            <View>
              <CustomText text={"Morbius"} customizedFontSize={24} customizedFontWeight={"400"}/>
              <CustomText text={"Marvel Studio"} customizedFontSize={12} customizedFontWeight={"200"}/>
            </View>
            <View>
              <ImageWrapper src={starsImage} customizedWidth={80} customizedHeight={20} customizedResizeMode={"contain"}/>
              <CustomText text={"From 342 users"} customizedFontWeight={"200"} customizedFontSize={12}/>
            </View>
          </View>
        </ImageBackground>
        <CustomText customizedMarginTop={15} text={"Continue Watching."} customizedMarginBottom={5}/>
        <View style={styles.inlineImages}>
          <MovieWrapper src={movieImage1} movieName={"Grapper Baki"} movieDesc={"T.1 Episode 4"}/>
          <MovieWrapper src={movieImage2} movieName={"Boku no Hero"} movieDesc={"T.3 Episode 10"}/>
          <MovieWrapper src={movieImage3} movieName={"Halleluyah"} movieDesc={"T.1 Episode 5"}/>
        </View>
        <View style={styles.inlineText}>
          <View style={styles.dot}></View>
          <CustomText text={"For You"} customizedFontSize={18} customizedFontWeight={"600"}/>
          <CustomText text={"Popular"}/>
          <CustomText text={"Comedy"}/>
          <CustomText text={"Horror"}/>
        </View>
        <View style={styles.inlineImages}>
          <MovieWrapper src={movieImage4} movieName={"Secret Wars"} movieDesc={"2022"} customizedTextAlign={"center"}/>
          <MovieWrapper src={movieImage5} movieName={"Secret Wars"} movieDesc={"2022"} customizedTextAlign={"center"}/>
          <MovieWrapper src={movieImage4} movieName={"Secret Wars"} movieDesc={"2022"} customizedTextAlign={"center"}/>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    DashboardContainer: {
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight + 15 : 0,
        paddingLeft: 15,
        paddingRight: 15,
        backgroundColor: "#18181B",

    },
    headerStyle: {
      flexDirection: "row",
      position: 'relative',
      alignItems: "center",
    },
    headerTextView: {
      marginLeft: 15,
    },
    studioImageStyle: {
      width: "100%",
      height: 200,
      marginTop: 10,
      justifyContent:"flex-end",
      overflow: "hidden",
      borderRadius: 20,
    },
    studioStyle: {
      padding: 15,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    inlineImages: {
      flexDirection: "row",
    },
    inlineText: {
      position: "relative",
      flexDirection: "row",
      justifyContent: "space-around",
      marginBottom: 5,
      marginTop: 5,
    },
    dot: {
      position: 'absolute',
      top: 7,
      left: 2,
      width: 7,
      height: 7,
      borderRadius: 5,
      backgroundColor: "white",
    },
});
