import { View, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";

export default function Rating({ stars = 3.5, totalStars = 5}){
    //shaded star, shaded half star, unshaded star
    const star_container = [];
    const [starIndex, setStarIndex] = useState(stars);

    const renderLogic = () => {
        //Explanantion: the first for loop shades all the stars aheccording to the starIndex
        //The second for loop checks if the starIndex is a decimal and then half shade
        //The third for loop unshade the stars that is remaining when you substract the totalstar from the starIndex
        //During the process the index value is used to give the Parent of the star a key

        var index = 1;
        //repeating the shaded stars to add the minimal stars using Math.floor
        for(let i = 1; i <= Math.floor(starIndex) && (starIndex <= totalStars); i++){
            star_container.push(<TouchableOpacity key={index} onPress={()=>setStarIndex(i)}><MaterialIcons  name="star" size={25} color={"gold"} /></TouchableOpacity>);
            index++;
        }
    
        //Checking if it is decimal
        if(starIndex % 1 != 0){
            star_container.push(<TouchableOpacity key={index} onPress={()=>setStarIndex(starIndex + 1)}><MaterialIcons name="star-half" size={25} color={"gold"} /></TouchableOpacity>);
            index++;
        }
    
        //repeating the unshaded star by rounding it up, using Math.ceil
        for(let i = 1; i <= totalStars - Math.ceil(starIndex) && (starIndex <= totalStars); i++){
            star_container.push(<TouchableOpacity key={index} onPress={()=>setStarIndex(Math.ceil(starIndex)+1)}><MaterialIcons name="star-outline" size={25}/></TouchableOpacity>);
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