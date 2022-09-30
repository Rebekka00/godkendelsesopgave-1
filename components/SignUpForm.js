import React, {useState} from 'react';
import {Button,Text, View, TextInput, ActivityIndicator, StyleSheet} from 'react-native';
import { initializeApp } from "firebase/app";
import firebase from "firebase/compat";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// // De variabler der benyttes til at oprette sig
function SignUpForm() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isCompleted, setCompleted] = useState(false)
    const [errorMessage, setErrorMessage] = useState(null)

    // Knap der trykkes på når bruger har udfyldt ovenstående og så vil oprette sig
    const renderButton = () => {
        return <Button onPress={() => handleSubmit()} title="Er du ny? Opret en bruger her!" />;
    };

    // Bruger forsøger at oprette sig ved at firebase opbevarer dataen i dens database,
    // meen hvis der opstår en fejl ifm. oprettelsen, gives en errormessage
    const handleSubmit = async() => {
        try {
            await firebase.auth().createUserWithEmailAndPassword(email, password).then((data)=>{
            });
        } catch (error){
            setErrorMessage(error.message)
        }

    }

    // De to øverste skaber inputfelterne til at taste e-mail og kodeord, den nederste giver errormessage
    return (
        <View>
            <Text style={styles.header}>Opret</Text>
            <TextInput
                placeholder="e-mail"
                value={email}
                onChangeText={(email) => setEmail(email)}
                style={styles.inputField}
            />
            <TextInput
                placeholder="kodeord"
                value={password}
                onChangeText={(password) => setPassword(password)}
                secureTextEntry
                style={styles.inputField}
            />
            {errorMessage && (
                <Text style={styles.error}>Error: {errorMessage}</Text>
            )}
            {renderButton()}
        </View>
    );

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>SignUp</Text>
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

export default SignUpForm