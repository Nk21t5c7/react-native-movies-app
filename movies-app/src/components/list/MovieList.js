import { FlatList, View, StyleSheet } from "react-native";
import MovieCard from "../listItem/MovieCard";

const MovieList = ({ movies }) => {

    return (
        <View style={styles.container}>
            <FlatList
                data={movies}
                renderItem={({ item }) => (
                    <MovieCard item={item} />
                )}
            />
        </View>
    )
}

export default MovieList;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
    },
  });