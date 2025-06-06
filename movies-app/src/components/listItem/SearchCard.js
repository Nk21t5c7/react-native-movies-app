import { Button, Card, Text } from "@rneui/themed";
import { View, StyleSheet } from 'react-native';
import { useState } from 'react';
import { useNavigation } from "@react-navigation/native";


const SearchCard = ({item}) => {
    const [isPressed, setIsPressed] = useState(false);
    const navigation = useNavigation();
    const { poster_path, release_date, popularity, id } = item;
    const imageUrl = `https://image.tmdb.org/t/p/w500${poster_path}`;
    const mediaType = item.media_type || 'movie';

    const title = item.title || item.name;

    return (
        <Card containerStyle={styles.cardContainer}>
            <View style={styles.row}>
                <Card.Image source={{ uri: imageUrl }} style={styles.image} />
                <Card.Divider />
                <View style={styles.content}>
                    <Card.Title style={{ textAlign: "left" }}>{title}</Card.Title>
                    <Text style={{ marginBottom: 10, marginTop: 10 }}>Popularity: {popularity}</Text>
                    <Text style={{ marginBottom: 10, marginTop: 10 }}>Release Date: {release_date}</Text>
                    <Button
                        onPressIn={() => setIsPressed(true)}
                        onPressOut={() => setIsPressed(false)}
                        buttonStyle={{
                            backgroundColor: isPressed ? '#333' : '#000',
                            borderRadius: 0,
                            marginLeft: 0,
                            marginRight: 0,
                            marginBottom: 0
                        }}
                        title="More Details"
                        onPress={() => navigation.navigate('Detail', {
                            id,
                            title: title,
                            type: mediaType
                        })}
                    />
                </View>
            </View>
        </Card>
    )
}

export default SearchCard;

const styles = StyleSheet.create({
    cardContainer: {
        padding: 10,
    },
    row: {
        flexDirection: "row",
        justifyContent: "center",
        
    },
    image: {
        width: 120,
        aspectRatio: 2 / 3,
        borderRadius: 5,
        marginRight: 10,
        alignSelf: 'center',
    },
    content: {
        flex: 1,
        justifyContent: "space-between",
        paddingVertical: 10,
        paddingHorizontal: 15,
        textAlign: "left",
    },
    button: {
        borderRadius: 4,
        marginTop: 10,
    },
});