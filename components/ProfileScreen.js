import {View, Text, Button, StyleSheet} from 'react-native';
import * as React from "react";
import firebase from "firebase/compat";

function ProfileScreen () {
    const handleLogOut = async () => {
        await firebase.auth().signOut();
    };

    if (!firebase.auth().currentUser) {
        return <View><Text>Not found</Text></View>;
    }

    return (
        <View style={styles.container} >
            <Text>Din e-mail: {firebase.auth().currentUser.email}</Text>
            <Button onPress={() => handleLogOut()} title="Log ud" />
        </View>
    );

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Profile</Text>
        </View>
    );

}

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