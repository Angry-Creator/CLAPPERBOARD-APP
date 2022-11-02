import { Platform, StatusBar, StyleSheet, View, Text, TouchableOpacity, FlatList } from 'react-native';
import ProfileImage from "../components/ProfileImage";
import { MaterialIcons } from "@expo/vector-icons";
import NewReleaseCard from '../components/NewReleaseCard';
import ContinueWatchingCard from '../components/ContinueWatchingCard';
import MovieCard from '../components/MovieCard';


export default function Dashboard({ navigation }) {
  //Continue Movie Data
  const continueWatchingData = [{
    title: "X-MEN APOCALYPSE", subTitle: "T.1 Episode 1", image: require("../../assets/images/xmen.jpg"), progress: "80%"
  },
  { title: "Harry Potter", subTitle: "T.2 Episode 2", image: require("../../assets/images/harrypotter.jpg"), progress: "50%" },
  { title: "Avengers End Game", subTitle: "T.2 Episode 2", image: require("../../assets/images/endgame.jpg"), progress: "60%" },
  ];
  //Recommeded Movie Data
  const recommendedMovieData = [
    { title: "DORA", subTitle: "2022", image: require("../../assets/images/dora.jpg") },
    { title: "Black Panther", subTitle: "2022", image: require("../../assets/images/blackpanther.jpg") },
    { title: "Avengers: Infinity War", subTitle: "2022", image: require("../../assets/images/infinitywar.jpg") },
    { title: "Secret War", subTitle: "2022", image: require("../../assets/images/secret-war.png") }
  ];
  //Categories text data
  const recommendedCategories = [
    "For You", "Popular", "Comedy", "Horror", "Drama"
  ];

  //Continue Watching Item rendering arror function
  const renderContinueWatchingItem = ({ item }) => {
    return (
      <ContinueWatchingCard title={item.title} subTitle={item.subTitle} image={item.image} progress={item.progress} />
    )
  }
  //Recommended Movie Item rendering arror function
  const renderOthersItem = ({ item }) => {
    return (
      <MovieCard title={item.title} subTitle={item.subTitle} image={item.image} progress={item.progress} />
    )
  }

  //Rendering Flatlist seperator conponent arror function
  const renderDataItemSeperator = () => {
    return (
      <View style={{ width: 10 }}></View>
    )
  }

  //Rendering Flatlist seperator conponent arror function
  const renderCategoryTextSeperator = () => {
    return (
      <View style={{ width: 22 }}></View>
    )
  }

  //Recommended Category text Item rendering arror function
  const renderCategoryText = ({ item }) => {
    return (
      <Text style={styles.othersText}>{item}</Text>
    )
  }

  return (
    <View style={styles.DashboardContainer}>
      {/* Header Section */}
      <View style={styles.headerSection}>
        {/* ProfileImage */}
        <TouchableOpacity style={styles.headerImageSection}>
          <ProfileImage image={require('../../assets/images/profile_image.jpg')} />
        </TouchableOpacity>
        {/* Text Section */}
        <View style={styles.headerTextSection}>
          <Text style={styles.headerTitle}>Welcome back</Text>
          <Text style={styles.headerSubTitle}>Maria</Text>
        </View>
        {/* Button Section */}
        <TouchableOpacity style={styles.headerBtnSection}>
          <MaterialIcons name="dehaze" size={30} color={"white"} onPress={()=> navigation.navigate("SearchPage")}/>
        </TouchableOpacity>
      </View>

      {/* New Release Card */}
      <Text style={styles.newReleaseText}>New Release</Text>
      <TouchableOpacity>
        <NewReleaseCard title={"Morbius"} subTitle={"Marvel Studio"} image={require('../../assets/images/studio_image.png')} />
      </TouchableOpacity>

      {/* Continue Watching */}
      <View>
        <Text style={styles.continueWatchingText}>Continue Watching</Text>
        <FlatList style={{ paddingVertical: 10 }} data={continueWatchingData} renderItem={renderContinueWatchingItem} ItemSeparatorComponent={renderDataItemSeperator} horizontal={true}/>
      </View>

      {/* Recommeded Movies */}
      <View style={styles.recommendedCategoriesContainer}>
        <View style={styles.dot}></View>
        <FlatList style={{ paddingHorizontal: 15 }} data={recommendedCategories} renderItem={renderCategoryText} ItemSeparatorComponent={renderCategoryTextSeperator} horizontal={true} />
        <FlatList style={{ paddingVertical: 10 }} data={recommendedMovieData} renderItem={renderOthersItem} ItemSeparatorComponent={renderDataItemSeperator} horizontal={true} />
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
  studioImageStyle: {
    width: "100%",
    height: 200,
    marginTop: 10,
    justifyContent: "flex-end",
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
  headerSection: { flexDirection: "row" },
  headerImageSection: { width: 60 },
  headerTextSection: {
    flexGrow: 1,
    width: 60,
    justifyContent: "center",
    paddingLeft: 10,
  },
  headerBtnSection: {
    width: 60,
    justifyContent: "center",
    alignItems: "flex-end",
  },
  headerTitle: {
    color: "white",
    fontWeight: "600",
    fontSize: 20,
  },
  headerSubTitle: {
    color: "white",
    fontWeight: "400",
    fontSize: 15,
  },
  newReleaseText: {
    color: "#E8E8E8",
    fontSize: 14,
    fontWeight: "400",
    marginTop: 20,
  },
  continueWatchingText: {
    color: "#E8E8E8",
    fontSize: 14,
    fontWeight: "400",
    marginTop: 15,
    paddingBottom: 5,
  },
  othersText: {
    color: "#E8E8E8",
    fontSize: 14,
    fontWeight: "400",
    marginTop: 5,
    paddingBottom: 10,
  },
  recommendedCategoriesContainer: {
    position: "relative"
  },
  dot: {
    position: 'absolute',
    top: 12,
    left: 5,
    width: 7,
    height: 7,
    borderRadius: 5,
    backgroundColor: "white",
  },
});

