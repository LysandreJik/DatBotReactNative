import React from 'react';
import { Text, View, Animated, Easing, ActivityIndicator, TouchableOpacity } from 'react-native';
import { Font } from 'expo';
import {DatBot} from "./DatBot";


export default class Dashboard extends React.Component{
    constructor(props){
        super(props);
        this.state = {fontLoaded: false};
    }

    async componentDidMount(){
        await Font.loadAsync({
            "Uni": require('../../../../assets/fonts/Uni.otf')
        });

        console.log("Font loaded ! ");
        this.setState({fontLoaded: true});
    }

    render(){
        let parent = this;
        if(this.state.fontLoaded){
            return(
                <View style={styles.mainContainer}>
                    {DatBot.getController().getNonBannedBots().map(function(bot, key){
                        return (
                            <TouchableOpacity key={key} style={styles.botContainer} onPress={() => parent.props.navigation.navigate('BotInformation', {title: bot.getName()})}>
                                <View style={styles.innerContainer}>
                                    <Text style={{...styles.text, fontFamily:"Uni"}}>
                                        {bot.getName()}
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        );
                    })}
                </View>
            );
        }else{
            return <View style={styles.mainContainer}><Text>Loading ...</Text></View>;
        }
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
        justifyContent: 'center'
    },

    innerContainer:{
        backgroundColor: "rgba(255, 89, 100, .4)",
        width:"90%",
        height: "70%",
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20
    },

    text: {
        color:"#FDD",
        fontSize: 30
    }
};