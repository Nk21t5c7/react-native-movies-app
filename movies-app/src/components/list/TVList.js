import { FlatList, View, StyleSheet } from "react-native";
import TVCard from "../listItem/TVCard";

const TVList = ({ tvShows }) => {

    return (
        <View style={styles.container}>
            <FlatList
                data={tvShows}
                renderItem={({ item }) => (
                    <TVCard item={item} />
                )}
            />
        </View>
    )
}

export default TVList;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
    //   paddingHorizontal: 10,
    //   paddingTop: 10,
    },
  });