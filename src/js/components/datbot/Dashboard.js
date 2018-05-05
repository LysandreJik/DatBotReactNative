import React from 'react';
import { Text, View, Animated, Easing, ActivityIndicator, TouchableOpacity } from 'react-native';
import {DatBot} from "./DatBot";

export default class Dashboard extends React.Component{



    render(){
        return(
            <View style={styles.mainContainer}>
                {DatBot.getController().getNonBannedBots().map(function(bot, key){
                    return (
                        <TouchableOpacity style={styles.botContainer}>
                            <Text key={key} style={styles.text}>
                                {bot.getName()}
                            </Text>
                        </TouchableOpacity>
                    );
                })}
            </View>
        );
    }
}

const styles = {
    mainContainer:{
        flex: 1,
        flexDirection: "column",
        width: "100%"
    },

    botContainer:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "rgba(255, 89, 100, .4)",
        height: "90%"
    },

    text: {
        color:"#FDD"
    }
};