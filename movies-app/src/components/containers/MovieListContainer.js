import React, { useEffect, useState } from 'react';
import MovieList from '../list/MovieList';
import { View } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { getData } from '../services/api';
import Loading from '../layout/Loading';

// const moviesData = [
//     {
//         "adult": false,
//         "backdrop_path": "/7Zx3wDG5bBtcfk8lcnCWDOLM4Y4.jpg",
//         "genre_ids": [
//             10751,
//             35,
//             878
//         ],
//         "id": 552524,
//         "original_language": "en",
//         "original_title": "Lilo & Stitch",
//         "overview": "The wildly funny and touching story of a lonely Hawaiian girl and the fugitive alien who helps to mend her broken family.",
//         "popularity": 736.864,
//         "poster_path": "/tUae3mefrDVTgm5mRzqWnZK6fOP.jpg",
//         "release_date": "2025-05-17",
//         "title": "Lilo & Stitch",
//         "video": false,
//         "vote_average": 7.105,
//         "vote_count": 391
//     },
//     {
//         "adult": false,
//         "backdrop_path": "/4MNRH73XmwBK2ycv3qvLpa07O5F.jpg",
//         "genre_ids": [
//             28,
//             18
//         ],
//         "id": 1257960,
//         "original_language": "hi",
//         "original_title": "सिकंदर",
//         "overview": "A tragic accident pushes the powerful Sikandar to protect the less fortunate by standing up to corruption and greed — using any means necessary.",
//         "popularity": 455.2904,
//         "poster_path": "/t48miSSfe7COqgbgMyRIyPVTBoM.jpg",
//         "release_date": "2025-03-29",
//         "title": "Sikandar",
//         "video": false,
//         "vote_average": 5.143,
//         "vote_count": 35
//     },
//     {
//         "adult": false,
//         "backdrop_path": "/2Nti3gYAX513wvhp8IiLL6ZDyOm.jpg",
//         "genre_ids": [
//             10751,
//             35,
//             12,
//             14
//         ],
//         "id": 950387,
//         "original_language": "en",
//         "original_title": "A Minecraft Movie",
//         "overview": "Four misfits find themselves struggling with ordinary problems when they are suddenly pulled through a mysterious portal into the Overworld: a bizarre, cubic wonderland that thrives on imagination. To get back home, they'll have to master this world while embarking on a magical quest with an unexpected, expert crafter, Steve.",
//         "popularity": 457.1268,
//         "poster_path": "/yFHHfHcUgGAxziP1C3lLt0q2T4s.jpg",
//         "release_date": "2025-03-31",
//         "title": "A Minecraft Movie",
//         "video": false,
//         "vote_average": 6.493,
//         "vote_count": 1606
//     },
//     {
//         "adult": false,
//         "backdrop_path": "/uIpJPDNFoeX0TVml9smPrs9KUVx.jpg",
//         "genre_ids": [
//             27,
//             9648
//         ],
//         "id": 574475,
//         "original_language": "en",
//         "original_title": "Final Destination Bloodlines",
//         "overview": "Plagued by a violent recurring nightmare, college student Stefanie heads home to track down the one person who might be able to break the cycle and save her family from the grisly demise that inevitably awaits them all.",
//         "popularity": 372.564,
//         "poster_path": "/6WxhEvFsauuACfv8HyoVX6mZKFj.jpg",
//         "release_date": "2025-05-14",
//         "title": "Final Destination Bloodlines",
//         "video": false,
//         "vote_average": 6.966,
//         "vote_count": 543
//     },
//     {
//         "adult": false,
//         "backdrop_path": "/3VkPqpjKikQg2M2n6xgTfR9xr7E.jpg",
//         "genre_ids": [
//             28,
//             12,
//             53
//         ],
//         "id": 575265,
//         "original_language": "en",
//         "original_title": "Mission: Impossible - The Final Reckoning",
//         "overview": "Ethan Hunt and team continue their search for the terrifying AI known as the Entity — which has infiltrated intelligence networks all over the globe — with the world's governments and a mysterious ghost from Hunt's past on their trail. Joined by new allies and armed with the means to shut the Entity down for good, Hunt is in a race against time to prevent the world as we know it from changing forever.",
//         "popularity": 278.0627,
//         "poster_path": "/iKPsC9EFUafRP9SrUznI61getVP.jpg",
//         "release_date": "2025-05-17",
//         "title": "Mission: Impossible - The Final Reckoning",
//         "video": false,
//         "vote_average": 7.1,
//         "vote_count": 540
//     },
//     {
//         "adult": false,
//         "backdrop_path": "/icFWIk1KfkWLZnugZAJEDauNZ94.jpg",
//         "genre_ids": [
//             27,
//             9648
//         ],
//         "id": 1232546,
//         "original_language": "en",
//         "original_title": "Until Dawn",
//         "overview": "One year after her sister Melanie mysteriously disappeared, Clover and her friends head into the remote valley where she vanished in search of answers. Exploring an abandoned visitor center, they find themselves stalked by a masked killer and horrifically murdered one by one...only to wake up and find themselves back at the beginning of the same evening.",
//         "popularity": 246.5215,
//         "poster_path": "/juA4IWO52Fecx8lhAsxmDgy3M3.jpg",
//         "release_date": "2025-04-23",
//         "title": "Until Dawn",
//         "video": false,
//         "vote_average": 6.475,
//         "vote_count": 538
//     },
//     {
//         "adult": false,
//         "backdrop_path": "/wIZ6cPH9lGC03gM0U6Es05afcSZ.jpg",
//         "genre_ids": [
//             27,
//             53
//         ],
//         "id": 1233413,
//         "original_language": "en",
//         "original_title": "Sinners",
//         "overview": "Trying to leave their troubled lives behind, twin brothers return to their hometown to start again, only to discover that an even greater evil is waiting to welcome them back.",
//         "popularity": 238.7202,
//         "poster_path": "/jYfMTSiFFK7ffbY2lay4zyvTkEk.jpg",
//         "release_date": "2025-04-16",
//         "title": "Sinners",
//         "video": false,
//         "vote_average": 7.512,
//         "vote_count": 969
//     },
//     {
//         "adult": false,
//         "backdrop_path": "/cJvUJEEQ86LSjl4gFLkYpdCJC96.jpg",
//         "genre_ids": [
//             10752,
//             28
//         ],
//         "id": 1241436,
//         "original_language": "en",
//         "original_title": "Warfare",
//         "overview": "A platoon of Navy SEALs embarks on a dangerous mission in Ramadi, Iraq, with the chaos and brotherhood of war retold through their memories of the event.",
//         "popularity": 191.298,
//         "poster_path": "/srj9rYrjefyWqkLc6l2xjTGeBGO.jpg",
//         "release_date": "2025-04-09",
//         "title": "Warfare",
//         "video": false,
//         "vote_average": 7.289,
//         "vote_count": 468
//     },
//     {
//         "adult": false,
//         "backdrop_path": "/tyfO9jHgkhypUFizRVYD0bytPjP.jpg",
//         "genre_ids": [
//             10751,
//             14
//         ],
//         "id": 447273,
//         "original_language": "en",
//         "original_title": "Snow White",
//         "overview": "Following the benevolent King's disappearance, the Evil Queen dominated the once fair land with a cruel streak. Princess Snow White flees the castle when the Queen, in her jealousy over Snow White's inner beauty, tries to kill her. Deep into the dark woods, she stumbles upon seven magical dwarves and a young bandit named Jonathan. Together, they strive to survive the Queen's relentless pursuit and aspire to take back the kingdom.",
//         "popularity": 165.5493,
//         "poster_path": "/oLxWocqheC8XbXbxqJ3x422j9PW.jpg",
//         "release_date": "2025-03-12",
//         "title": "Snow White",
//         "video": false,
//         "vote_average": 4.307,
//         "vote_count": 998
//     },
//     {
//         "adult": false,
//         "backdrop_path": "/qspghhpOyaBGgZDJoCbV2o9WNMU.jpg",
//         "genre_ids": [
//             27,
//             9648
//         ],
//         "id": 1001414,
//         "original_language": "en",
//         "original_title": "Fear Street: Prom Queen",
//         "overview": "Who will be voted queen at Shadyside High's 1988 prom? For underdog Lori, competition is cutthroat even before someone starts killing off the candidates.",
//         "popularity": 158.2956,
//         "poster_path": "/gevScWYkF8l5i9NjFSXo8HfPNyy.jpg",
//         "release_date": "2025-05-23",
//         "title": "Fear Street: Prom Queen",
//         "video": false,
//         "vote_average": 5.318,
//         "vote_count": 245
//     },
//     {
//         "adult": false,
//         "backdrop_path": "/aESb695wTIF0tB7RTGRebnYrjFK.jpg",
//         "genre_ids": [
//             12,
//             14,
//             9648
//         ],
//         "id": 1098006,
//         "original_language": "en",
//         "original_title": "Fountain of Youth",
//         "overview": "A treasure-hunting mastermind assembles a team for a life-changing adventure. But to outwit and outrun threats at every turn, he'll need someone even smarter than he is: his estranged sister.",
//         "popularity": 158.2408,
//         "poster_path": "/4iWjGghUj2uyHo2Hyw8NFBvsNGm.jpg",
//         "release_date": "2025-05-19",
//         "title": "Fountain of Youth",
//         "video": false,
//         "vote_average": 6.5,
//         "vote_count": 364
//     },
//     {
//         "adult": false,
//         "backdrop_path": "/jRvhP4AfFnJ03lCQhp1fie7XPSd.jpg",
//         "genre_ids": [
//             28,
//             53
//         ],
//         "id": 977294,
//         "original_language": "en",
//         "original_title": "Tin Soldier",
//         "overview": "An ex-special forces operative seeks revenge against a cult leader who has corrupted his former comrades, the Shinjas. This leader, known as The Bokushi, promises veterans a purpose and protection, but is revealed to be a destructive influence. The ex-soldier, Nash Cavanaugh, joins forces with military operative Emmanuel Ashburn to infiltrate the Bokushi's fortress and expose his reign of terror",
//         "popularity": 154.0196,
//         "poster_path": "/6HU667T8fxoIvgsgu2eyaznntsp.jpg",
//         "release_date": "2025-05-22",
//         "title": "Tin Soldier",
//         "video": false,
//         "vote_average": 4.918,
//         "vote_count": 49
//     },
//     {
//         "adult": false,
//         "backdrop_path": "/youmOAJwM4XCoHAgeYNXACA7Buc.jpg",
//         "genre_ids": [
//             16,
//             12,
//             35,
//             10751
//         ],
//         "id": 676685,
//         "original_language": "nl",
//         "original_title": "Pandabeer in Afrika",
//         "overview": "A young adventurous panda travels from China to Africa to rescue his best friend, Jielong the Dragon, who has been kidnapped. On his journey, he discovers a strange amazing new world of mountains, deserts and jungles.",
//         "popularity": 141.6882,
//         "poster_path": "/wxpu7svVqA0ALYpofQBPujGelN3.jpg",
//         "release_date": "2024-03-15",
//         "title": "Panda Bear in Africa",
//         "video": false,
//         "vote_average": 6.25,
//         "vote_count": 40
//     },
//     {
//         "adult": false,
//         "backdrop_path": "/dJ1JpHuTCRxtGpRq8bQzk2jBqTi.jpg",
//         "genre_ids": [
//             10751,
//             14,
//             12
//         ],
//         "id": 896536,
//         "original_language": "en",
//         "original_title": "The Legend of Ochi",
//         "overview": "In a remote village on the island of Carpathia, a shy farm girl named Yuri is raised to fear an elusive animal species known as ochi. But when Yuri discovers a wounded baby ochi has been left behind, she escapes on a quest to bring him home.",
//         "popularity": 140.4739,
//         "poster_path": "/wVujUVvY4qvKARAslItQ4ARKqtz.jpg",
//         "release_date": "2025-04-18",
//         "title": "The Legend of Ochi",
//         "video": false,
//         "vote_average": 6.26,
//         "vote_count": 100
//     },
//     {
//         "adult": false,
//         "backdrop_path": "/d5aBTObiUzqGZMohXtQKY4FMGvb.jpg",
//         "genre_ids": [
//             27
//         ],
//         "id": 1297028,
//         "original_language": "en",
//         "original_title": "Rosario",
//         "overview": "Wall Street stockbroker Rosario Fuentes returns to her grandmother's apartment after her sudden death. While sorting through her belongings, Rosario discovers a hidden chamber that's filled with occult artifacts tied to dark generational rituals. As supernatural occurrences begin to plague her, she must confront her family's buried secrets and face the truth about the sacrifices and choices they made.",
//         "popularity": 134.6711,
//         "poster_path": "/beLZhuHT97849WkWgty2X1hkWUa.jpg",
//         "release_date": "2025-05-01",
//         "title": "Rosario",
//         "video": false,
//         "vote_average": 5.036,
//         "vote_count": 28
//     },
//     {
//         "adult": false,
//         "backdrop_path": "/14UFWFJsGeInCbhTiehRLTff4Yx.jpg",
//         "genre_ids": [
//             53,
//             28
//         ],
//         "id": 1233069,
//         "original_language": "de",
//         "original_title": "Exterritorial",
//         "overview": "When her son vanishes inside a US consulate, ex-special forces soldier Sara does everything in her power to find him — and uncovers a dark conspiracy.",
//         "popularity": 136.7536,
//         "poster_path": "/jM2uqCZNKbiyStyzXOERpMqAbdx.jpg",
//         "release_date": "2025-04-29",
//         "title": "Exterritorial",
//         "video": false,
//         "vote_average": 6.738,
//         "vote_count": 435
//     },
//     {
//         "adult": false,
//         "backdrop_path": "/rthMuZfFv4fqEU4JVbgSW9wQ8rs.jpg",
//         "genre_ids": [
//             28,
//             878,
//             12
//         ],
//         "id": 986056,
//         "original_language": "en",
//         "original_title": "Thunderbolts*",
//         "overview": "After finding themselves ensnared in a death trap, seven disillusioned castoffs must embark on a dangerous mission that will force them to confront the darkest corners of their pasts.",
//         "popularity": 133.0243,
//         "poster_path": "/m9EtP1Yrzv6v7dMaC9mRaGhd1um.jpg",
//         "release_date": "2025-04-30",
//         "title": "Thunderbolts*",
//         "video": false,
//         "vote_average": 7.411,
//         "vote_count": 1061
//     },
//     {
//         "adult": false,
//         "backdrop_path": "/8GZQMdep33NMdeIyV0ur0JMXZIO.jpg",
//         "genre_ids": [
//             18,
//             35
//         ],
//         "id": 1417059,
//         "original_language": "en",
//         "original_title": "Mountainhead",
//         "overview": "A group of billionaire friends get together against the backdrop of a rolling international crisis.",
//         "popularity": 130.6186,
//         "poster_path": "/jZKK5mFKWbquxhAGMkRJtNYwk0I.jpg",
//         "release_date": "2025-05-22",
//         "title": "Mountainhead",
//         "video": false,
//         "vote_average": 5.804,
//         "vote_count": 23
//     },
//     {
//         "adult": false,
//         "backdrop_path": "/op3qmNhvwEvyT7UFyPbIfQmKriB.jpg",
//         "genre_ids": [
//             28,
//             14,
//             12
//         ],
//         "id": 324544,
//         "original_language": "en",
//         "original_title": "In the Lost Lands",
//         "overview": "A queen sends the powerful and feared sorceress Gray Alys to the ghostly wilderness of the Lost Lands in search of a magical power, where she and her guide, the drifter Boyce, must outwit and outfight both man and demon.",
//         "popularity": 130.2478,
//         "poster_path": "/dDlfjR7gllmr8HTeN6rfrYhTdwX.jpg",
//         "release_date": "2025-02-27",
//         "title": "In the Lost Lands",
//         "video": false,
//         "vote_average": 6.356,
//         "vote_count": 406
//     },
//     {
//         "adult": false,
//         "backdrop_path": "/z5caDtY3tn6rwbzB8iIA8PFCqYN.jpg",
//         "genre_ids": [
//             35
//         ],
//         "id": 1245165,
//         "original_language": "es",
//         "original_title": "Viaje de fin de curso: Mallorca",
//         "overview": "2021. After spending a year in confinement, a group of high school students and their two teachers begin an end-of-year trip to Mallorca. This great plan is the last opportunity they have to all be together, make up for lost time, be able to have fun like they have never had before and say goodbye to this crazy stage of their lives. However, a new coronavirus outbreak disrupts all their plans and forces them to stay locked in their hotel rooms. More than 50 students, 2 teachers, a hotel and many, many minibars... What could go wrong?",
//         "popularity": 114.6037,
//         "poster_path": "/ejYX4ygRoupGRjFgmmtnK0sMxhN.jpg",
//         "release_date": "2025-05-30",
//         "title": "Graduation Trip: Mallorca",
//         "video": false,
//         "vote_average": 5.6,
//         "vote_count": 15
//     }
// ];

const MovieListContainer = () => {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [type, setType] = useState('top_rated');

    useEffect(() => {
        if (!type) return;
        console.log('Selected type:', type);
        const fetchMoviesByType = async () => {
            setIsLoading(true);
            try {
                console.log("start loading");
                const data = await getData(type, 'movie');
                console.log('Movies:', data);
                setMovies(data);
            } catch (error) {
                console.error('Error Movies:', error);
            } finally {
                setIsLoading(false);
                console.log("finish loading")
            }
        };

        fetchMoviesByType();
        // setMovies(moviesData);
    }, [type]);

    return (
        <View style={{ flex: 1, padding: 10 }}>
            <RNPickerSelect
                value={type}
                onValueChange={(value) => {
                    console.log('Selected:', value);
                    setType(value);
                }}
                items={[
                    { label: 'Top Rated', value: 'top_rated' },
                    { label: 'Popular', value: 'popular' },
                    { label: 'Upcoming', value: 'upcoming' },
                    { label: 'Now Playing', value: 'now_playing' },
                ]}
                placeholder={{ label: null }}
                style={{
                    inputIOS: {
                        fontSize: 16,
                        color: 'black',
                        backgroundColor: 'white',
                        paddingVertical: 12,
                        paddingHorizontal: 10,
                        borderWidth: 1,
                        borderColor: '#ccc',
                        borderRadius: 4,
                        width: '50%',
                        margin: 'auto'
                    },
                    inputAndroid: {
                        fontSize: 16,
                        color: 'black',
                        backgroundColor: 'white',
                        paddingVertical: 8,
                        paddingHorizontal: 10,
                        borderWidth: 1,
                        borderColor: '#ccc',
                        borderRadius: 4,
                        width: '50%',
                        margin: 'auto'
                    },
                    inputIOSContainer: {
                        pointerEvents: 'none',
                    },
                }}
            />
            {isLoading ? (
                <Loading />
            ) : (
                <View style={{ flex: 1 }}>
                    <MovieList movies={movies} />
                </View>
            )}
        </View>
    );
};

export default MovieListContainer;
