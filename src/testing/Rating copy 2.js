import { View, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useEffect, useState } from "react";

export default function Rating({ stars = 4.5, totalStars = 5}){
    const [starIndex, setStarIndex] = useState(stars);
    const [starContainer, setStarContainer] = useState([]);
    //shaded star, shaded half star, unshaded star

    const star_container = [];
    const renderLogic = () => {
        star_container.length=0;
        // console.log(star_container)
        var index = 1;
        //repeating the shaded stars to add the minimal stars using Math.floor
        for(let i = 0; i < Math.floor(starIndex); i++){
            star_container.push(<TouchableOpacity onPress={()=> setStarIndex(index)}><MaterialIcons  name="star" size={30} color={"gold"} key={index}/></TouchableOpacity>);
            index++;
        }
    
        //Checking if it is decimal
        if(starIndex % 1 != 0){
            star_container.push(<TouchableOpacity><MaterialIcons name="star-half" size={30} color={"gold"} key={index}/></TouchableOpacity>);
            index++;
        }
    
        //repeating the unshaded star by rounding it up, using Math.ceil
        for(let i = 0; i < totalStars - Math.ceil(starIndex); i++){
            star_container.push(<TouchableOpacity><MaterialIcons name="star-outline" size={30}key={index}/></TouchableOpacity>);
            index++;
        }
        console.log(star_container);
        // setStarContainer(star_container)
    }

    // useEffect(()=>{
    //     renderLogic();
    // }, );

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