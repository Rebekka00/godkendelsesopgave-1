import * as React from 'react';
import {View, Text, FlatList, TouchableOpacity, StyleSheet, ScrollView,} from 'react-native';
import firebase from 'firebase/compat';
import {useEffect, useState} from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import Create from "./Create";

const navController = (navigation, route) => {
    navigation.navigate(route)
}

const Events = ({navigation}) => {

    const [Events,setNewEvents] = useState()

    useEffect(() => {
        if(!Events) {
            firebase
                .database()
                .ref('/Event')
                .on('value', snapshot => {
                    setNewEvents(snapshot.val())
                    console.log(snapshot.val())
                });
        }
    },[]);

    // Når der ikke er nogen events, vises blot teksten "Events" samt en knap til at oprette begivenheder.
    if (!Events) {
        return(
            <ScrollView style={{ backgroundColor: "#FFFFFF",}}>
                <View>

                    <Text style={{
                        fontSize: 70,
                        fontWeight: 'bold',
                        justifyContent: 'center',
                        textAlign: 'center',
                        color: '#A07FD8',
                        paddingTop: 55,
                        paddingBottom: 30}}>
                        Events
                    </Text>
                    <TouchableOpacity onPress={() => navController(navigation, "Create")} >
                        <Ionicons name="add-circle-outline"
                                  style={{
                                      //position: 'absolute',
                                      left: 300,
                                      top: 2,
                                      fontSize:45
                                  }} />
                    </TouchableOpacity>
                </View>
            </ScrollView>
        )
    }

    // Søger efter en begivenhed i samlingen af begivenheder og finder det, som matcher ID'et.
    const handleSelectEvents = id => {
        const events = Object.entries(Events).find( events => events[0] === id /*id*/)
        navigation.navigate('Events Details', { events });
    };


    const eventsArray = Object.values(Events);
    const eventsKeys = Object.keys(Events);

    return (
        <ScrollView style={{ backgroundColor: "#FFFFFF",}}>
            <View>

                <Text style={{
                    fontSize: 70,
                    fontWeight: 'bold',
                    justifyContent: 'center',
                    textAlign: 'center',
                    color: '#A07FD8',
                    paddingTop: 55,
                    paddingBottom: 30}}>
                    Events
                </Text>
                <TouchableOpacity onPress={() => navController(navigation, "Create")} >
                    <Ionicons name="add-circle-outline"
                              style={{
                                  //position: 'absolute',
                                  left: 300,
                                  top: 2,
                                  fontSize:45
                              }} />
                </TouchableOpacity>
                <FlatList
                    data={eventsArray}
                    keyExtractor={(item, index) => eventsKeys[index]}
                    renderItem={({ item, index }) => {
                        return(
                            <TouchableOpacity onPress={() => handleSelectEvents(eventsKeys[index])}>
                                <Text style={styles.container}>
                                    {item.eventName}, {item.location}, {item.time}
                                </Text>

                            </TouchableOpacity>
                        )
                    }}
                />
            </View>
        </ScrollView>
    );
}

export default Events;

// Styling
const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderWidth: 1,
        borderRadius:10,
        margin: 20,
        padding: 5,
        height: 50,
        justifyContent:'center',

    },
    label: { fontWeight: 'bold' },
});
