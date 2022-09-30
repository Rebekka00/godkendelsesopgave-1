// import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfileScreen from "./components/ProfileScreen";
import HomeScreen from "./components/HomeScreen";
import SignUpForm from "./components/SignUpForm";
import LoginForm from "./components/LoginForm";
// import StackNavigator from "./components/StackNavigator";
import { Card } from 'react-native-paper';
import firebase from "firebase/compat";
import Ionicons from "react-native-vector-icons/Ionicons";

// Her er Appens Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBg3HsyXmxLBZea3ssN44h71xT7_qfoWiQ",
    authDomain: "godkendelsesopgave1.firebaseapp.com",
    projectId: "godkendelsesopgave1",
    storageBucket: "godkendelsesopgave1.appspot.com",
    messagingSenderId: "975837684848",
    appId: "1:975837684848:web:03c1cc3f9ae68c22ca00b5"
};

export default function App() {

// Opretter bruger state variablen
const [user, setUser] = useState({ loggedIn: false });

    // Her bliver Firebase initialiseret
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }

// Monitorerer om brugeren er logget ind eller ej
function onAuthStateChange(callback) {
    return firebase.auth().onAuthStateChanged(user => {
        if (user) {
            callback({loggedIn: true, user: user});
        } else {
            callback({loggedIn: false});
        }
    });
}

useEffect(() => {
    const unsubscribe = onAuthStateChange(setUser);
    return () => {
        unsubscribe();
    };
}, []);

// Her er den side brugeren bliver mødt med, når de åbner appen, hvorfra der kan oprettes en bruger eller logges ind
const GuestPage = () => {
    return(
        <ScrollView>
        <View style={styles.container}>
            <Text style={styles.paragraph}>
                Velkommen til MeetMe{'\n'}{'\n'}Her kan du oprette en ny profil, eller logge ind på din eksisterende profil{'\n'}
            </Text>
            <Card style={{padding:10, marginBottom: 30}}>
                <SignUpForm />
            </Card>
            <Card style={{padding:10, marginBottom: 20}}>
                <LoginForm />
            </Card>
        </View>
        </ScrollView>
    )
}

// Brugeren føres fra ovenstående til Appens forside/hjemskærm, når de er logget ind
return user.loggedIn ? <HomeScreen/> : <GuestPage/>;

      function Nav() {
        return (
            <NavigationContainer>
                <Tab.Navigator>
                    <Tab.Screen name="Home" component={StackNavigation}/>
                    <Tab.Screen name="Profile" component={ProfileScreen}/>
                </Tab.Navigator>
            </NavigationContainer>
        )
    }
}

// Styling af GuestPage (den første side brugeren ser, når de åbner Appen)
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'aliceblue',
        padding: 40,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 30
    },
    paragraph: {
        margin: 10,
        fontSize: 25,
        fontWeight: 'normal',
        textAlign: 'center',
    },
});