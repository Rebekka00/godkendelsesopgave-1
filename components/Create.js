/*
import * as React from 'react';
import {View, Text, StyleSheet, TextInput, Button, Alert, ScrollView, SafeAreaView,} from 'react-native';
import firebase from 'firebase/compat';
import {useEffect, useState} from "react";
import Events from "./Events";


const Create = ({navigation,route}) => {
    const initialState = { eventName: '', location: '', time: '', eventType: '' }
    const [newEvent,setNewEvent] = useState(initialState);

    //
    const isEditEvent = route.name === "Edit event";

    useEffect(() => {
        if(isEditEvent){
            const event = route.params.event[1];
            setNewEvent(event)
        }

        return () => {
            setNewEvent(initialState)
        };
    }, []);

    const changeTextInput = (name,event) => {
        setNewEvent({...newEvent, [name]: event});
    }

    const handleSave = () => {

        const { eventName, location, time, eventType } = newEvent;

        if(eventName.length === 0 || location.length === 0 || time.length === 0 || eventType.length === 0 ){
            return Alert.alert('Et af felterne er tomme!');
        }

        if(isEditEvent){
            const id = route.params.event[0];
            try {
                firebase
                    .database()
                    .ref(`/Event/${id}`)
                    .update({ eventName, location, time, eventType });
                Alert.alert("Din info er nu opdateret");
                const event = [id,newEvent]
                navigation.navigate("Event Details",{event});
            } catch (error) {
                console.log(`Error: ${error.message}`);
            }

        }else{

            try {
                firebase
                    .database()
                    .ref('/Event/')
                    .push({ eventName, location, time, eventType });
                Alert.alert(`Saved`);
                setnewEvent(initialState)
            } catch (error) {
                console.log(`Error: ${error.message}`);
            }
        }

    };

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
                    Create
                </Text>
                <SafeAreaView style={styles.container}>
                    <ScrollView>
                        {
                            Object.keys(initialState).map((key,index) =>{
                                return(
                                    <View style={styles.row} key={index}>
                                        <Text style={styles.label}>{key}</Text>
                                        <TextInput
                                            value={newEvent[key]}
                                            onChangeText={(event) => changeTextInput(key,event)}
                                            style={styles.input}
                                        />
                                    </View>
                                )
                            })
                        }
                        <Button title={ isEditEvent ? "Save changes" : "Add Event"} onPress={() => handleSave()} />
                        <Button title="Gå tilbage" onPress={() => navigation.navigate('Events')}/>
                    </ScrollView>
                </SafeAreaView>
            </View>
        </ScrollView>
    );
}

export default Create;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    row: {
        flexDirection: 'row',
        height: 30,
        margin: 10,
    },
    label: {
        fontWeight: 'bold',
        width: 100
    },
    input: {
        borderWidth: 1,
        padding:5,
        flex: 1
    },
});
 */