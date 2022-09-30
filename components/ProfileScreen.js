import {View, Text, Button, StyleSheet} from 'react-native';
import * as React from "react";
import firebase from "firebase/compat";

// En bruger kan logge ud af Appen (firebase metode)
function ProfileScreen () {
    const handleLogOut = async () => {
        await firebase.auth().signOut();
    };

    // Kan profilen af en eller anden grund ikke findes, når den forsøger at logge ud, gives beskeden "Ej fundet"
    if (!firebase.auth().currentUser) {
        return <View><Text>Ej fundet</Text></View>;
    }

    // Viser brugerens e-mail på profilsiden ved at hente den fra firebase
    return (
        <View style={styles.container} >
            <Text>Din e-mail: {firebase.auth().currentUser.email}</Text>
            <Button onPress={() => handleLogOut()} title="Log ud" />
        </View>
    );

    /*
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Profile</Text>
        </View>
    );
     */

}

// Styling
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: '5%',
        backgroundColor: '#8fbc8f',
        padding: 8,
    },
});

export default ProfileScreen