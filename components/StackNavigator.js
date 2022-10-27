// import {Text, View } from 'react-native';
import * as React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import HomeScreen from "./HomeScreen";
import FullEventPage from "./stackComponents/FullEventPage";
import Create from "./Create";
import Events from "./Events";

// Her bliver StackNavigator initialiseret
const Stack = createStackNavigator();

// I StackNavigator er der oprettet to sider i Appen: HomeScreen (siden brugeren kommer ind på, når de logger ind,
// som viser alle begivenheder) og FullEventPage (siden brugeren kommer ind på, når de trykker på en begivenhed)
function StackNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="HomeScreen" component={HomeScreen}/>
            <Stack.Screen name="FullEventPage" component={FullEventPage}/>
            <Stack.Screen name="Create" component={FullEventPage}/>
        </Stack.Navigator>
    );
}

export default StackNavigator