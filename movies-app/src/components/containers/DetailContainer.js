import { View, StyleSheet, Dimensions } from 'react-native'
import { Button, Card, Text } from "@rneui/themed";
import { getDetail } from '../services/api';
import { useEffect, useState } from 'react';
import Loading from '../layout/Loading';

const screenWidth = Dimensions.get('window').width;

const DetailContainer = ({ id, title, type }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [item, setItem] = useState({});

    console.log('type:', type);

    useEffect(() => {
        console.log('DetailContainer type:', type, id, title);

        const fetchDetail = async () => {
            try {
                setIsLoading(true);
                const data = await getDetail(id, type);
                console.log('Movie Detail:', data);
                setItem(data);
            } catch (error) {
                console.error('Error fetching:', error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchDetail();

    }, [])

    return (
        <View style={{ flex: 1, paddingHorizontal: 20 }}>
            {item ? <Card containerStyle={{
                backgroundColor: 'transparent',
                elevation: 0,
                borderWidth: 0,
                boxShadow: 'none'
            }}>
                <Text style={{ textAlign: 'center', fontSize: 24, paddingTop: 24, paddingBottom: 42 }}>{title}</Text>
                <Card.Image source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }} style={styles.image} />
                <Text>{item.overview}</Text>
                <View style={styles.descriptionContainer}>
                    <Text >Release Date: {item.release_date}</Text>
                    {/* <Card.Divider /> */}
                    <View style={styles.verticalDivider} />

                    <Text >Popularity: {item.popularity}</Text>
                </View>
            </Card>
                :
                <Loading />
            }
        </View>
    );

}

export default DetailContainer;

const styles = StyleSheet.create({
    cardContainer: {
        padding: 10,
    },
    row: {
        flexDirection: "row",
    },
    image: {
        display: 'flex',
        width: screenWidth * 0.5,
        height: screenWidth * 0.75,
        borderRadius: 5,
        marginRight: 10,
        alignItems:'center'
    },
    content: {
        flex: 1,
        justifyContent: "space-between",
        paddingVertical: 10,
        paddingHorizontal: 15,
        textAlign: "left",
    },
    verticalDivider: {
        width: 1,
        height: 18,
        backgroundColor: '#ccc',
        marginHorizontal: 10,
    },

    descriptionContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 10,
    },
    description: {
        fontSize: 14,
        color: '#333',
        marginTop: 10,
        textAlign: 'justify',
    }
});



