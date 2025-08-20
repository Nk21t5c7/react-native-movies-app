import React, { useState, useEffect } from 'react';
import TVList from '../list/TVList';
import { View, ActivityIndicator, ScrollView } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { getData } from '../services/api';
import Loading from '../layout/Loading';

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