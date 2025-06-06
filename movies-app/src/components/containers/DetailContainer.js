import { View, StyleSheet, Dimensions } from 'react-native'
import { Button, Card, Text } from "@rneui/themed";
import { getDetail } from '../services/api';
import { useEffect, useState } from 'react';
import Loading from '../layout/Loading';

const screenWidth = Dimensions.get('window').width;

// const detailData = {
//     "adult": false,
//     "backdrop_path": "/7Zx3wDG5bBtcfk8lcnCWDOLM4Y4.jpg",
//     "belongs_to_collection": null,
//     "budget": 100000000,
//     "genres": [
//         {
//             "id": 10751,
//             "name": "Family"
//         },
//         {
//             "id": 35,
//             "name": "Comedy"
//         },
//         {
//             "id": 878,
//             "name": "Science Fiction"
//         }
//     ],
//     "homepage": "https://movies.disney.com/lilo-and-stitch-2025",
//     "id": 552524,
//     "imdb_id": "tt11655566",
//     "origin_country": [
//         "US"
//     ],
//     "original_language": "en",
//     "original_title": "Lilo & Stitch",
//     "overview": "The wildly funny and touching story of a lonely Hawaiian girl and the fugitive alien who helps to mend her broken family.",
//     "popularity": 736.864,
//     "poster_path": "/tUae3mefrDVTgm5mRzqWnZK6fOP.jpg",
//     "production_companies": [
//         {
//             "id": 2,
//             "logo_path": "/wdrCwmRnLFJhEoH8GSfymY85KHT.png",
//             "name": "Walt Disney Pictures",
//             "origin_country": "US"
//         },
//         {
//             "id": 118854,
//             "logo_path": "/g9LPNlQFoDcHjfnvrEqFmeIaDrZ.png",
//             "name": "Rideback",
//             "origin_country": "US"
//         }
//     ],
//     "production_countries": [
//         {
//             "iso_3166_1": "US",
//             "name": "United States of America"
//         }
//     ],
//     "release_date": "2025-05-17",
//     "revenue": 610800000,
//     "runtime": 108,
//     "spoken_languages": [
//         {
//             "english_name": "English",
//             "iso_639_1": "en",
//             "name": "English"
//         },
//         {
//             "english_name": "Spanish",
//             "iso_639_1": "es",
//             "name": "Español"
//         }
//     ],
//     "status": "Released",
//     "tagline": "Hold on to your coconuts.",
//     "title": "Lilo & Stitch",
//     "video": false,
//     "vote_average": 7.1,
//     "vote_count": 391
// }

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

        // if (type === 'movie') {
        //     const fetchMovieDetail = async () => {
        //         try {
        //             setIsLoading(true);
        //             const data = await getDetail(id, );
        //             console.log('Movie Detail:', data);
        //             setItem(data);
        //         } catch (error) {
        //             console.error('Error fetching:', error);
        //         } finally {
        //             setIsLoading(false);
        //         }
        //     };
        //     fetchMovieDetail();
        // }
        // else {

        //     const fetchTVDetail = async () => {
        //         try {
        //             setIsLoading(true);
        //             const data = await getDetail(id, 'tv');
        //             console.log('TV Detail:', data);
        //             setItem(data);
        //         } catch (error) {
        //             console.error('Error fetching:', error);
        //         } finally {
        //             setIsLoading(false);
        //         }
        //     };
        //     fetchTVDetail();
        // }

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