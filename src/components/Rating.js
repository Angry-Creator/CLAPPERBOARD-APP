import { View, StyleSheet} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function Rating({ stars = 3.5, totalStars = 5}){
    //shaded star, shaded half star, unshaded star
    const star_container = [];

    const renderLogic = () => {
        //Explanantion: the first for loop shades all the stars aheccording to the stars
        //The second for loop checks if the stars is a decimal and then half shade
        //The third for loop unshade the stars that is remaining when you substract the totalstar from the stars
        //During the process the index value is used to give the Parent of the star a key

        var index = 1;
        //repeating the shaded stars to add the minimal stars using Math.floor
        for(let i = 1; i <= Math.floor(stars); i++){
            star_container.push(<MaterialIcons  name="star" size={25} color={"gold"} key={index}/>);
            index++;
        }
    
        //Checking if it is decimal
        if(stars % 1 != 0){
            star_container.push(<MaterialIcons name="star-half" size={25} color={"gold"} key={index}/>);
            index++;
        }
    
        //repeating the unshaded star by rounding it up, using Math.ceil
        for(let i = 1; i <= totalStars - Math.ceil(stars) && (stars <= totalStars); i++){
            star_container.push(<MaterialIcons name="star-outline" color={"white"} size={25} key={index}/>);
            index++;
        }
    }

    renderLogic();
    return(
        <View style={styles.container}>
            {star_container}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    }
})