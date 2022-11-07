import { View, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function Rating({ stars = 4.5, totalStars = 5}){
    //shaded star, shaded half star, unshaded star
    const star_container = [];

    const renderLogic = () => {
        var index = 0;
        //repeating the shaded stars to add the minimal stars using Math.floor
        for(let i = 0; i < Math.floor(stars); i++){
            star_container.push(<MaterialIcons  name="star" size={30} color={"gold"} key={index}/>);
            index++;
        }
    
        //Checking if it is decimal
        if(stars % 1 != 0){
            star_container.push(<MaterialIcons name="star-half" size={30} color={"gold"} key={index}/>);
            index++;
        }
    
        //repeating the unshaded star by rounding it up, using Math.ceil
        for(let i = 0; i < totalStars - Math.ceil(stars); i++){
            star_container.push(<MaterialIcons name="star-outline" size={30}key={index}/>);
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
        backgroundColor: "white",
    }
})