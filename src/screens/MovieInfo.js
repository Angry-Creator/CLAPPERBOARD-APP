import { StyleSheet, View, Image } from 'react-native';
import MovieDescription from '../components/MovieDescription';
import GradientButton from "../components/GradientButton";
import Actor from '../components/Actor';

export default function MovieInfo({ navigation, route}) {
    //The movie description
    const movieDescription = route.params;
    const movieImage = movieDescription.image;
    const movieName = movieDescription.name;
    const movieStudio = movieDescription.studio;
    const movieDescText = movieDescription.text;

    return (
        <View style={styles.MovieInfocontainer}>
            {/* Image Banner */}
            <View style={styles.BannerContainer}>
                <Image source={movieImage} resizeMode={"cover"} style={styles.imageStyle} />
            </View>

            {/* Movie Description */}
            <View style={styles.movieDescriptionContainer}>
                <MovieDescription title={movieName} subTitle={movieStudio} descText={movieDescText} />
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

// MovieBanner - 0.47
// movieDescription - 0.22
// actorsContainer - 0.22
// gradientButtonContainer 0.15

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
        backgroundColor: "#18181B",
    },
    movieDescriptionContainer: {
        flex: 0.22,
        overflow: "hidden",
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