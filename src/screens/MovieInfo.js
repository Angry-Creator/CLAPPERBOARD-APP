import { Platform, StatusBar, StyleSheet, View, Image } from 'react-native';
import MovieDescription from '../components/MovieDescription';
import GradientButton from "../components/GradientButton";
import Actor from '../components/Actor';

export default function MovieInfo() {
    //The movie description
    const movieDescription = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex...";

    return (
        <View style={styles.MovieInfocontainer}>
            {/* Image Banner */}
            <View style={styles.BannerContainer}>
                <Image source={require("../../assets/images/movie-info-banner.png")} resizeMode={"cover"} style={styles.imageStyle} />
            </View>

            {/* Movie Description */}
            <View style={styles.movieDescriptionContainer}>
                <MovieDescription title={"Morbius"} subTitle={"Marvel Studio"} descText={movieDescription} />
            </View>

            {/* Actors List */}
            <View style={styles.actorsContainer}>
                <View>
                    <Actor image={require("../../assets/images/profile_image.jpg")} nameOfActor={"Chidera Nwankwo"} positionOfActor={"Director"} />
                    <Actor image={require("../../assets/images/profile_image.jpg")} nameOfActor={"Chidera Nwankwo"} positionOfActor={"Director"} />
                </View>
                <View>
                    <Actor image={require("../../assets/images/profile_image.jpg")} nameOfActor={"Chidera Nwankwo"} positionOfActor={"Director"} />
                    <Actor image={require("../../assets/images/profile_image.jpg")} nameOfActor={"Chidera Nwankwo"} positionOfActor={"Director"} />
                </View>
            </View>

            {/* GradientButton  */}
            <View style={styles.gradientButtonContainer}>
                <GradientButton text={"Watch Now"} />
            </View>
        </View>
    )
}

// MovieBanner - 0.5 
// movieDescription - 0.2
// actorsContainer - 0.2
// gradientButtonContainer 0.1

const styles = StyleSheet.create({
    BannerContainer: {
        flex: 0.47,
    },
    imageStyle: {
        width: "100%",
        height: "100%"
    },
    MovieInfocontainer: {
        flex: 1,
        // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        backgroundColor: "#18181B",
    },
    movieDescriptionContainer: {
        flex: 0.22,
    },
    gradientButtonContainer: {
        flex: 0.15,
        flexDirection: "row",
        justifyContent: "center"
    },
    actorsContainer: {
        flex: 0.22,
        flexDirection: "row",
        alignItems: "center",
    }
})