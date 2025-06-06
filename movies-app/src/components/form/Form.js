
import { Ionicons } from "expo-vector-icons";
import { View, StyleSheet } from "react-native";
import { Input, Button } from "@rneui/themed";
import RNPickerSelect from 'react-native-picker-select';
import { useState } from "react";


const Form = (props) => {
    const { onInputChange, onTypeChange, onSubmit, type } = props;

    return (
        <View style={styles.formContainer} >
            <View style={{ ...styles.formItems, ...styles.input }}>
                <Input
                    disabledInputStyle={{ backgroundColor: '#ddd' }}
                    label="Search Movie/TV Show Name"
                    leftIcon={< Ionicons name='search' />}
                    placeholder="i.e. James Bond, CSI"
                    onChangeText={(input) => onInputChange(input)}
                    required
                />
            </View>

            <View style={styles.typeContainer}>
                <View style={styles.option}>
                    <RNPickerSelect
                        value={type}
                        placeholder={{ label: null }}
                        onValueChange={(value) => onTypeChange(value)}
                        items={[
                            { label: 'Multi', value: 'multi' },
                            { label: 'Movie', value: 'movie' },
                            { label: 'TV Show', value: 'tv' },
                        ]}
                        style={{
                            inputIOS: {
                                color: 'black',
                                paddingVertical: 12,
                                paddingHorizontal: 10,
                                borderWidth: 1,
                                borderColor: '#ccc',
                                borderRadius: 4,
                                fontSize: 16,
                            },
                            inputAndroid: {
                                color: 'black',
                                paddingVertical: 8,
                                paddingHorizontal: 10,
                                borderWidth: 1,
                                borderColor: '#ccc',
                                borderRadius: 4,
                                fontSize: 16,
                            },
                            inputIOSContainer: {
                                pointerEvents: 'none',
                            },
                        }}
                    />
                </View>

                <View style={styles.button}>
                    <Button
                        color='primary'
                        onPress={onSubmit}
                        type="solid"
                    >
                        Search
                    </Button>
                </View>
            </View>



        </View>
    )
};

export default Form;

const styles = StyleSheet.create({
    formContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        justifyContent: 'center',
        flexWrap: 'wrap',
        paddingTop: 10,
        paddingBottom: 5,

    },
    input: {
        width: '100%',
        paddingHorizontal: 10,
    },
    typeContainer: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        paddingHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    option: {
        width: '63%',
        paddingVertical: 20
    },
    button: {
        width: '33%'
    }

});