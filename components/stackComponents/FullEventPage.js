import {Button, Image, Text, View, ScrollView} from 'react-native';
import * as React from "react";

// Styling af siden med begivenheder
function FullEventPage({}) {
    return (
        <ScrollView>
        <View style={{  flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginLeft: 80,
                        marginRight: 80,
                        marginTop: 20,
                        marginBottom: 20,
                        backgroundColor: 'white'
        }}>
            {/*Det billede af begivenheden der ses, når brugeren trykker på begivenheden med padel tennis*/}
            <Image source={require("../../assets/Event.png")}/>
        </View>
        </ScrollView>
    );
}

export default FullEventPage