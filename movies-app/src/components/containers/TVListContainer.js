import React, { useState, useEffect } from 'react';
import TVList from '../list/TVList';
import { View, ActivityIndicator, ScrollView } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { getData } from '../services/api';
import Loading from '../layout/Loading';

// const tvData = [
//     {
//         "adult": false,
//         "backdrop_path": "/gMMnf8VRg3Z98WaFmOLr9Jk8pIs.jpg",
//         "genre_ids": [
//             35,
//             10767
//         ],
//         "id": 63770,
//         "origin_country": [
//             "US"
//         ],
//         "original_language": "en",
//         "original_name": "The Late Show with Stephen Colbert",
//         "overview": "Stephen Colbert brings his signature satire and comedy to The Late Show with Stephen Colbert, the #1 show in late night, where he talks with an eclectic mix of guests about what is new and relevant in the worlds of politics, entertainment, business, music, technology, and more. Featuring bandleader Jon Batiste with his band Stay Human, the Emmy Award-nominated show is broadcast from the historic Ed Sullivan Theater. Stephen Colbert, Chris Licht, Tom Purcell, and Jon Stewart are executive producers. Barry Julien and Denise Rehrig serve as co-executive producers.must watch",
//         "popularity": 514.5437,
//         "poster_path": "/9jkThAGYj2yp8jsS6Nriy5mzKFT.jpg",
//         "first_air_date": "2015-09-08",
//         "name": "The Late Show with Stephen Colbert",
//         "vote_average": 6.3,
//         "vote_count": 308
//     },
//     {
//         "adult": false,
//         "backdrop_path": "/kA50bkSC6bw5ZkutYrN9sLD9CZ9.jpg",
//         "genre_ids": [
//             10767,
//             35
//         ],
//         "id": 22980,
//         "origin_country": [
//             "US"
//         ],
//         "original_language": "en",
//         "original_name": "Watch What Happens Live with Andy Cohen",
//         "overview": "Bravo network executive Andy Cohen discusses pop culture topics with celebrities and reality show personalities.",
//         "popularity": 508.0417,
//         "poster_path": "/onSD9UXfJwrMXWhq7UY7hGF2S1h.jpg",
//         "first_air_date": "2009-07-16",
//         "name": "Watch What Happens Live with Andy Cohen",
//         "vote_average": 5.1,
//         "vote_count": 71
//     },
//     {
//         "adult": false,
//         "backdrop_path": "/qLMfcvdCcCGD2BNLH8b6ZCBuO7D.jpg",
//         "genre_ids": [
//             10763,
//             35
//         ],
//         "id": 2224,
//         "origin_country": [
//             "US"
//         ],
//         "original_language": "en",
//         "original_name": "The Daily Show",
//         "overview": "The World's Fakest News Team tackle the biggest stories in news, politics and pop culture.",
//         "popularity": 347.058,
//         "poster_path": "/ixcfyK7it6FjRM36Te4OdblAq4X.jpg",
//         "first_air_date": "1996-07-22",
//         "name": "The Daily Show",
//         "vote_average": 6.4,
//         "vote_count": 573
//     },
//     {
//         "adult": false,
//         "backdrop_path": "/h0y3OzHzG4yNvn8u3Za6ByH8lrQ.jpg",
//         "genre_ids": [
//             18,
//             10766
//         ],
//         "id": 45789,
//         "origin_country": [
//             "DE"
//         ],
//         "original_language": "de",
//         "original_name": "Sturm der Liebe",
//         "overview": "These are the stories of relationships taking place in the fictional five-star hotel Fürstenhof, located in Feldkirchen-Westerham near Rosenheim with the plot revolving around members of the family room area, the hotel owners, and employees.",
//         "popularity": 346.6472,
//         "poster_path": "/jfFNydakwvbeACEwSd2Gh8UWtba.jpg",
//         "first_air_date": "2005-09-26",
//         "name": "Sturm der Liebe",
//         "vote_average": 6.066,
//         "vote_count": 38
//     },
//     {
//         "adult": false,
//         "backdrop_path": "/s1dTt4M31q2HwD5Fkl1tf5tQzJg.jpg",
//         "genre_ids": [
//             10766
//         ],
//         "id": 206559,
//         "origin_country": [
//             "ZA"
//         ],
//         "original_language": "af",
//         "original_name": "Binnelanders",
//         "overview": "A South African Afrikaans soap opera. It is set in and around the fictional private hospital, Binneland Kliniek, in Pretoria, and the storyline follows the trials, trauma and tribulations of the staff and patients of the hospital.",
//         "popularity": 212.5042,
//         "poster_path": "/3bzECfllho8PphdYujLUIuhncJD.jpg",
//         "first_air_date": "2005-10-13",
//         "name": "Binnelanders",
//         "vote_average": 5.6,
//         "vote_count": 94
//     },
//     {
//         "adult": false,
//         "backdrop_path": "/pmAzkQJa993nIgPqFtVmOhStHXg.jpg",
//         "genre_ids": [
//             18,
//             10766
//         ],
//         "id": 2354,
//         "origin_country": [
//             "AU"
//         ],
//         "original_language": "en",
//         "original_name": "Home and Away",
//         "overview": "Home and Away is set in the fictional town of Summer Bay, a coastal town in New South Wales, and follows the personal and professional lives of the people living in the area. The show initially focused on the Fletcher family, Pippa and Tom Fletcher and their five foster children Frank Morgan, Carly Morris, Steven Matheson, Lynn Davenport and Sally Keating, who would go on to become one of the show's longest-running characters. The show also originally and currently focuses on the Stewart family. During the early 2000s, the central storylines focused on the Sutherlands and later, the Hunters. Home and Away had proved popular when it premiered in 1988 and had risen to become a hit in Australia, and after only a few weeks, the show tackled its first major and disturbing storyline, the rape of Carly Morris; it was one of the first shows to feature such storylines during the early timeslot. H&A has tackled many adult-themed and controversial storylines; something rarely found in its restricted timeslot.",
//         "popularity": 168.731,
//         "poster_path": "/vn0eKMiG69bhQtxb7qLRo8SSqu5.jpg",
//         "first_air_date": "1988-01-18",
//         "name": "Home and Away",
//         "vote_average": 6.292,
//         "vote_count": 72
//     },
//     {
//         "adult": false,
//         "backdrop_path": "/ynd225o8GuCahYGjHtFdEt8Xizm.jpg",
//         "genre_ids": [
//             10766
//         ],
//         "id": 235484,
//         "origin_country": [
//             "ZA"
//         ],
//         "original_language": "af",
//         "original_name": "Suidooster",
//         "overview": "Suidooster is a South African television soap opera produced by Suidooster Films which revolves around a matriarch, her family, friends and the people of Suidooster, a small shopping and business centre in the fictional Cape Town suburb of Ruiterbosch.",
//         "popularity": 162.0906,
//         "poster_path": "/naCgSiacvV685kait6fBvhVhdce.jpg",
//         "first_air_date": "2015-11-16",
//         "name": "Suidooster",
//         "vote_average": 7.091,
//         "vote_count": 22
//     },
//     {
//         "adult": false,
//         "backdrop_path": "/hvFCS0dMeC3ffiF4uYTKzUAkvYL.jpg",
//         "genre_ids": [
//             35
//         ],
//         "id": 65701,
//         "origin_country": [
//             "US"
//         ],
//         "original_language": "en",
//         "original_name": "Good Mythical Morning",
//         "overview": "Two \"Internetainers\" (Rhett & Link) go far out and do the weirdest things, giving you a daily dose of casual comedy every Monday-Friday.",
//         "popularity": 158.8934,
//         "poster_path": "/jMpBQr2aNOFAI6wsC47zsOG6qOh.jpg",
//         "first_air_date": "2012-01-09",
//         "name": "Good Mythical Morning",
//         "vote_average": 7,
//         "vote_count": 78
//     },
//     {
//         "adult": false,
//         "backdrop_path": "/pmB8uYJF1WKQCZnJjhnAx2IJjhk.jpg",
//         "genre_ids": [
//             10766
//         ],
//         "id": 14750,
//         "origin_country": [
//             "PL"
//         ],
//         "original_language": "pl",
//         "original_name": "Na Wspólnej",
//         "overview": "Na Wspólnej is a Polish soap opera. It has been running since 2003 on the TVN channel as its flagship primetime weekday soap opera. It is loosely based on the German production Unter Uns and it follows the lives of the inhabitants of an apartment block in Wspólna Street, Warsaw. Episodes tend to last around 20 minutes. It is a Polish version of the Hungarian \"Barátok közt\".\n\nThe series is shot almost entirely in Warsaw and produced by the Polish branch of Freemantle Media. On 9 September 2008 it celebrated its 1000th episode; \"Na Wspólnej\" was the fourth Polish television series ever to achieve such status. A special episode was broadcast in which characters from some other of TVN's most popular shows visited Wspólna Street.",
//         "popularity": 151.0348,
//         "poster_path": "/uksRhdaOn64bO5d33d7rcTbrhJI.jpg",
//         "first_air_date": "2003-01-27",
//         "name": "Na Wspólnej",
//         "vote_average": 4.4,
//         "vote_count": 9
//     },
//     {
//         "adult": false,
//         "backdrop_path": "/9kGfwwA0N0KOen7oTBGSVoQsXLz.jpg",
//         "genre_ids": [
//             35,
//             18,
//             10766
//         ],
//         "id": 32209,
//         "origin_country": [
//             "PE"
//         ],
//         "original_language": "es",
//         "original_name": "Al Fondo Hay Sitio",
//         "overview": "Al fondo hay sitio is a Peruvian TV series created in 2008-2009 by Efraín Aguilar. It deals with the problems of social differences and economic status. It's one of the most popular shows in Peru and is now being shown in Ecuador, Bolivia, Paraguay and Uruguay.",
//         "popularity": 150.2706,
//         "poster_path": "/4BkYVoybIvM2U7zeg2JTT5M5dwF.jpg",
//         "first_air_date": "2009-03-30",
//         "name": "Al Fondo Hay Sitio",
//         "vote_average": 7.827,
//         "vote_count": 223
//     },
//     {
//         "adult": false,
//         "backdrop_path": "/eGPH1IwktalozwCmeLTp3aPbHGC.jpg",
//         "genre_ids": [
//             10764
//         ],
//         "id": 4656,
//         "origin_country": [
//             "US"
//         ],
//         "original_language": "en",
//         "original_name": "Raw",
//         "overview": "A regularly scheduled, live, year-round program featuring some of the biggest WWE Superstars.",
//         "popularity": 144.6218,
//         "poster_path": "/pv5WNnLUo7mpT8k901Lo8UovrqI.jpg",
//         "first_air_date": "1993-01-11",
//         "name": "Raw",
//         "vote_average": 6.8,
//         "vote_count": 329
//     },
//     {
//         "adult": false,
//         "backdrop_path": "/vgeDRVpSUa4Hvovg4C6dgm4dfUW.jpg",
//         "genre_ids": [
//             10766,
//             18
//         ],
//         "id": 112470,
//         "origin_country": [
//             "FR"
//         ],
//         "original_language": "fr",
//         "original_name": "Ici tout commence",
//         "overview": "This television drama series is centered around the prestigious culinary school of renowned chef Auguste Armand. The show follows the lives of students and staff as they navigate the challenges and pressures of the culinary world—delving into their personal and professional lives, revealing secrets, rivalries, and complex relationships.",
//         "popularity": 138.1403,
//         "poster_path": "/x9HeaagUAyyGl1fQ6exQcpELBxP.jpg",
//         "first_air_date": "2020-11-02",
//         "name": "Ici tout commence",
//         "vote_average": 6.818,
//         "vote_count": 88
//     },
//     {
//         "adult": false,
//         "backdrop_path": "/aizbHLcKVWvJ7jxkflJzTu5Z8GE.jpg",
//         "genre_ids": [
//             10766
//         ],
//         "id": 81329,
//         "origin_country": [
//             "FR"
//         ],
//         "original_language": "fr",
//         "original_name": "Un si grand soleil",
//         "overview": "Claire is surprised when she gets arrested for the murder of her childhood friend after she returns to Montpellier.",
//         "popularity": 133.8468,
//         "poster_path": "/t6jVlbPMtZOJoAOfeoR4yQmnjXM.jpg",
//         "first_air_date": "2018-08-27",
//         "name": "Chronicles of the Sun",
//         "vote_average": 6.702,
//         "vote_count": 121
//     },
//     {
//         "adult": false,
//         "backdrop_path": "/5APjn4LnV5wWk5DXq7ZewT6zzP1.jpg",
//         "genre_ids": [
//             10766
//         ],
//         "id": 291,
//         "origin_country": [
//             "GB"
//         ],
//         "original_language": "en",
//         "original_name": "Coronation Street",
//         "overview": "The residents of Coronation Street are ordinary, working-class people, and the show follows them through regular social and family interactions at home, in the workplace, and in their local pub, the Rovers Return Inn. Britain's longest-running soap.",
//         "popularity": 133.1087,
//         "poster_path": "/5x1HXqYqPyYw7oc7Isu1lvVmwRP.jpg",
//         "first_air_date": "1960-12-09",
//         "name": "Coronation Street",
//         "vote_average": 5.338,
//         "vote_count": 111
//     },
//     {
//         "adult": false,
//         "backdrop_path": "/p0umYdTa7csDT9SkZX8DD52Sy4a.jpg",
//         "genre_ids": [
//             10764
//         ],
//         "id": 2051,
//         "origin_country": [
//             "US"
//         ],
//         "original_language": "en",
//         "original_name": "The Price Is Right",
//         "overview": "\"Come on down!\" The Price Is Right features a wide variety of games and contests with the same basic challenge: Guess the prices of everyday (or not-quite-everyday) retail items. ",
//         "popularity": 116.8408,
//         "poster_path": "/7MSqORrf1RZsmLUTQ2XoEJEtzt5.jpg",
//         "first_air_date": "1972-09-04",
//         "name": "The Price Is Right",
//         "vote_average": 6.2,
//         "vote_count": 85
//     },
//     {
//         "adult": false,
//         "backdrop_path": "/kkfqNkGQR5og5sDjJTxTVmI9PW.jpg",
//         "genre_ids": [
//             80,
//             18,
//             10766
//         ],
//         "id": 72879,
//         "origin_country": [
//             "FR"
//         ],
//         "original_language": "fr",
//         "original_name": "Demain nous appartient",
//         "overview": "The story revolves around the people of Sète, France. Their lives are punctuated by family rivalries, romance and scenes from daily life, but also by plots involving police investigations, secrets and betrayals.",
//         "popularity": 113.5978,
//         "poster_path": "/zMWldNZF0wS3L5XkDVFHxYhclcL.jpg",
//         "first_air_date": "2017-07-17",
//         "name": "Tomorrow Is Ours",
//         "vote_average": 6.288,
//         "vote_count": 66
//     },
//     {
//         "adult": false,
//         "backdrop_path": "/upD2G9Z7W07w47c7B8ZqLqbTDc5.jpg",
//         "genre_ids": [
//             10767
//         ],
//         "id": 1900,
//         "origin_country": [
//             "US"
//         ],
//         "original_language": "en",
//         "original_name": "LIVE with Kelly and Mark",
//         "overview": "A morning talk show with A-list celebrity guests, top-notch performances and one-of-a-kind segments that are unrivaled on daytime television, plus spontaneous, hilarious and unpredictable talk.",
//         "popularity": 111.8892,
//         "poster_path": "/hBkyypWN3EcOzkozatiCm5VeaG.jpg",
//         "first_air_date": "1988-09-05",
//         "name": "LIVE with Kelly and Mark",
//         "vote_average": 5.5,
//         "vote_count": 45
//     },
//     {
//         "adult": false,
//         "backdrop_path": "/1iAc3ML51uNe16jlxTQV84mLHG2.jpg",
//         "genre_ids": [
//             10766
//         ],
//         "id": 40879,
//         "origin_country": [
//             "DE"
//         ],
//         "original_language": "de",
//         "original_name": "Dahoam is Dahoam",
//         "overview": "The lives of the residents of the fictitious village of Lansing in Upper Bavaria.",
//         "popularity": 87.3866,
//         "poster_path": "/tGXZEUgSbgufoOpXMImSKPDd5A3.jpg",
//         "first_air_date": "2007-10-08",
//         "name": "Dahoam is Dahoam",
//         "vote_average": 5.6,
//         "vote_count": 5
//     },
//     {
//         "adult": false,
//         "backdrop_path": "/5dv4q9x4vTVTT6IHIlfEDvFhJet.jpg",
//         "genre_ids": [
//             10763,
//             35
//         ],
//         "id": 44337,
//         "origin_country": [
//             "GB"
//         ],
//         "original_language": "en",
//         "original_name": "Have I Got a Bit More News for You",
//         "overview": "Based on the week’s news and fronted by guest hosts, this extended version of the satirical news quiz features more of the stuff that wouldn't fit into the regular programme.",
//         "popularity": 81.9801,
//         "poster_path": "/aOZuKQ2uWRfZPzn61bnzQT5LhMR.jpg",
//         "first_air_date": "",
//         "name": "Have I Got a Bit More News for You",
//         "vote_average": 7,
//         "vote_count": 16
//     },
//     {
//         "adult": false,
//         "backdrop_path": "/pLn4lsSBtGUY1whHyCoEJhgziaP.jpg",
//         "genre_ids": [
//             10764,
//             10751
//         ],
//         "id": 2912,
//         "origin_country": [
//             "US"
//         ],
//         "original_language": "en",
//         "original_name": "Jeopardy!",
//         "overview": "America's favorite quiz show where contestants are presented with general knowledge clues in the form of answers, and must phrase their responses in question form.",
//         "popularity": 79.0797,
//         "poster_path": "/hfz0IgebqGENG6ZnuqKQKMFk2vy.jpg",
//         "first_air_date": "1984-09-10",
//         "name": "Jeopardy!",
//         "vote_average": 6.9,
//         "vote_count": 140
//     }
// ]


const TVListContainer = () => {
    const [type, setType] = useState('airing_today');
    const [isLoading, setIsLoading] = useState(false);
    const [tvShows, setTVShows] = useState([]);

    useEffect(() => {
        if (!type) return;

        const fetchTVByType = async () => {
            setIsLoading(true);
            try {
                const data = await getData(type, 'tv');
                console.log('TV Shows:', data);
                setTVShows(data);
            } catch (error) {
                console.error('Error fetching TV shows:', error);
            } finally {
                setIsLoading(false);
            }
        }
        fetchTVByType();

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
                    { label: 'Airing Today', value: 'airing_today' },
                    { label: 'On The Air', value: 'on_the_air' },
                    { label: 'Popular', value: 'popular' },
                    { label: 'Top Rated', value: 'top_rated' },
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
                    <TVList tvShows={tvShows} />
                </View>
            )}
        </View>
    )
}

export default TVListContainer;