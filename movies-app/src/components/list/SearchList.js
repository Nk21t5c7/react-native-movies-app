import { View, Text, FlatList } from "react-native";
import SearchCard from "../listItem/SearchCard";


const SearchList = ({ list, input }) => {

    if (list.length === 0) {
        return (
            <View style={{ flex: 1 }}>
                {input.length === 0 ? (
                    <Text>Please initiate a search</Text>
                ) : (
                    <Text></Text>
                )}
            </View>
        );
    }

    return (
        <FlatList
            data={list}
            keyExtractor={(item, index) => item.id?.toString() || index.toString()}
            renderItem={({ item }) => <SearchCard item={item} />}
            contentContainerStyle={{ flexGrow: 1 }}
        />
    );
};

export default SearchList;