import React from 'react';

import { Text, View, Animated, Easing } from 'react-native';
import Fetching from "./Fetching";
import Dashboard from "./Dashboard";

const DashboardController = require('./DashboardController').DashboardController;

export const AVAILABLE_DATBOT_PAGES = {
    DASHBOARD: 0,
    BOT: 1,
    GRAVEYARD: 2
};

export class DatBot extends React.Component{
    constructor(props){
        super(props);

        this.fadeValue = new Animated.Value(0);
        this.backgroundColorValue = new Animated.Value(0);
        this.foregroundColorValue = new Animated.Value(0);

        this.getWindow = this.getWindow.bind(this);
        this.initDatBot = this.initDatBot.bind(this);
        this.dataIsFetched = this.dataIsFetched.bind(this);

        this.state = {dataFetched: false, currentWindow: AVAILABLE_DATBOT_PAGES.DASHBOARD};
    }

    static getController(){
        if(DatBot._controller === undefined){
            DatBot._controller = new DashboardController();
        }

        return DatBot._controller;
    }

    componentDidMount(){
        this.initDatBot();
    }

    initDatBot(){
        this.fadeValue.setValue(0);
        this.backgroundColorValue.setValue(0);
        this.foregroundColorValue.setValue(0);

        Animated.timing(this.fadeValue, {toValue: 1, duration: 500, easing: Easing.linear}).start();
        Animated.timing(this.backgroundColorValue, {toValue: 1, duration: 500, easing: Easing.linear}).start();
        Animated.timing(this.foregroundColorValue, {toValue: 1, duration: 500, easing: Easing.linear}).start();
    }

    dataIsFetched(){
        this.setState({dataFetched: true});
    }

    getWindow(){
        if(this.state.dataFetched){
            if(this.state.currentWindow === AVAILABLE_DATBOT_PAGES.DASHBOARD){
                return <Dashboard/>
            }

            return <View><Text>Data is fetched</Text></View>
        }else{
            return <Fetching callback={this.dataIsFetched}/>
        }
    }

    render(){
        const fade = this.fadeValue.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1]
        });

        const backgroundColor = this.fadeValue.interpolate({
            inputRange: [0, 1],
            outputRange: ["#ffffff", "rgb(50, 50, 50)"]
        });

        const foregroundColor = this.fadeValue.interpolate({
            inputRange: [0, 1],
            outputRange: ["#ffffff", 1]
        });

        return(
            <View style={styles.container}>
                <Animated.View style={{...styles.innerContainer, opacity: fade, backgroundColor: backgroundColor}}>
                    {this.getWindow()}
                </Animated.View>
            </View>
        )
    }
}


const styles = {
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        width: "100%"
    },

    innerContainer: {
        width: "100%",
        height: "100%",
        alignItems: 'center',
        justifyContent: 'center'
    }
};
