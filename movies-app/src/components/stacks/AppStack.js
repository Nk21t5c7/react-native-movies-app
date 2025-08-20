import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TVScreen from '../screens/TVScreen';
import MovieScreen from '../screens/MovieScreen';
import SearchScreen from '../screens/SearchScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import DetailScreen from "../screens/DetailScreen";
import Header from "../layout/Header";
import { View } from "react-native";

const Stack = createNativeStackNavigator()
const Tab = createMaterialTopTabNavigator();

function MainTabs() {
    return (
        <View style={{ flex: 1 }}>
            <Header />
            <View style={{ flex: 1 }}>
                <Tab.Navigator>
                    <Tab.Screen name="Movie" component={MovieScreen} />
                    <Tab.Screen name="Search Results" component={SearchScreen} />
                    <Tab.Screen name="TV Shows" component={TVScreen} />
                </Tab.Navigator>
            </View>
        </View>
    );
}

const AppStack = () => {
    return <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
                name="MainTabs"
                component={MainTabs}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Detail"
                component={DetailScreen}
                options={({ route }) => ({
                    title: route.params.title,
                    headerBackTitle: 'Back to List',
                    headerTitleAlign: 'center',
                    headerTintColor: '#000',
                    headerStyle: {
                        backgroundColor: '#fff',
                    },
                })}
            />

        </Stack.Navigator>
    </NavigationContainer>
}


export default AppStack;


