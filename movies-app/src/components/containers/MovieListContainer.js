import React, { useEffect, useState } from 'react';
import MovieList from '../list/MovieList';
import { View } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { getData } from '../services/api';
import Loading from '../layout/Loading';

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
