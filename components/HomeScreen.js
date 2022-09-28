import {StyleSheet, Text, View, Image, TouchableOpacity, Alert, Button, ScrollView} from "react-native"
import * as React from "react";
import FullEventPage from "./stackComponents/FullEventPage";
import {NavigationContainer} from "@react-navigation/native";
import ProfileScreen from "./ProfileScreen";
//import SignUpForm from "./SignUpForm";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {createStackNavigator} from "@react-navigation/stack";

const navController = (navigation, route) => {
    navigation.navigate(route)
}

// Definerer StackNavigator funktionen, som returnerer navigationsbaren i bunden af Appen, således brugeren kommer
// ind på HomeScreen når der trykkes på det ikon, og på FullEventPage når der trykkes på padel tennis begivenheden
const Stack = createStackNavigator();
const StackNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="HomeScreen" component={HomeScreen}/>
            <Stack.Screen name="FullEventPage" component={FullEventPage}/>
        </Stack.Navigator>
    );
}

// Styling af HomeScreen
function HomeScreen ({navigation}) {
    return (
        <ScrollView>
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "white"}}>
            <Text>Begivenheder{'\n'}{'\n'}</Text>
            <TouchableOpacity onPress={() => navController(navigation, "FullEventPage")} >
                <Image source={require("../assets/Padel.png")}/>
            </TouchableOpacity>
            <Text>Klik på billedet{'\n'}{'\n'}{'\n'}{'\n'}</Text>
            <Image source={require("../assets/Teater.png")}/>
            <Text>Klik på billedet{'\n'}{'\n'}{'\n'}{'\n'}</Text>
        </View>
        </ScrollView>
    )
}

const Tab = createBottomTabNavigator();

export default function Nav() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={StackNavigation}/>
                <Tab.Screen name="Profile" component={ProfileScreen}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}