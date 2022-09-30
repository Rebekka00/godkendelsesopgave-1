import React, { useState} from 'react';
import {Button, Text, View, TextInput, ActivityIndicator, StyleSheet, TouchableOpacity} from 'react-native';
import { initializeApp } from "firebase/app";
import firebase from "firebase/compat";

// De variabler der benyttes til at logge ind
function LoginForm() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isCompleted, setCompleted] = useState(false)
    const [errorMessage, setErrorMessage] = useState(null)

    // Bruger forsøger at logge ind og firebase tjekker om brugerens data findes, hvis ikke gives en errormessage
    const handleSubmit = async () => {
        try {
            await firebase.auth().signInWithEmailAndPassword(email, password).then((data)=>{
            });

        } catch (error){
            setErrorMessage(error.message)
        }
    }

    // Login knap
    const renderButton = () => {
        return <Button onPress={() => handleSubmit()} title="Login her!"/>;

    };

    // De to øverste skaber inputfelterne til at taste e-mail og kodeord, den nederste giver errormessage
    return (
        <View>
            <Text style={styles.header}>Login</Text>
            <TextInput
                placeholder="e-mail"
                value={email}
                onChangeText={(email) => setEmail(email)}
                style={styles.inputField}
            />
            <TextInput
                placeholder="kodeord"
                value={password}
                onChangeText={(password) => setPassword(password) }
                secureTextEntry
                style={styles.inputField}
            />
            {errorMessage && (
                <Text style={styles.error}>Error: {errorMessage}</Text>
            )}
            {renderButton()}
        </View>
    );
}

// Styling
const styles = StyleSheet.create({
    error: {
        color: 'red',
    },
    inputField: {
        borderWidth: 1,
        margin: 20,
        padding: 10,
    },
    header: {
        fontSize: 30,
    },
});

export default LoginForm