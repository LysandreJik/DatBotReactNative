import React from 'react';
import { StyleSheet, Text, View, Animated, Easing, YellowBox } from 'react-native';
import Splash from "./src/js/components/Splash";
import {Menu} from "./src/js/components/Menu";
import {SpecBot} from "./src/js/components/specbot/SpecBot";
import {DatBot} from "./src/js/components/datbot/DatBot";

console.disableYellowBox = true;

export const AVAILABLE_PAGES = {
    MENU: 0,
    SPECBOT: 1,
    DATBOT: 2
};

export default class App extends React.Component {
    constructor(){
        super();
        this.getWindow = this.getWindow.bind(this);
        this.changePage = this.changePage.bind(this);
        this.initialized = this.initialized.bind(this);
        this.state = {init: true, currentPage: AVAILABLE_PAGES.DATBOT};
        this.sipweValue = new Animated.Value(0);

        this.swipeLeft = this.swipeLeft.bind(this);
    }

    swipeLeft(){
        this.sipweValue.setValue(0);
        Animated.timing(this.sipweValue, {toValue: 1, duration: 1000, easing: Easing.ease}).start();
    }

    initialized(){
        this.setState({init: true});
    }

    changePage(page){
        this.swipeLeft();
        setTimeout(() => this.setState({currentPage: page}), 1000);
    }

    getWindow(){
        if(this.state.init){
            if(this.state.currentPage === AVAILABLE_PAGES.MENU)
                return <Menu callback={this.changePage}/>;
            else if(this.state.currentPage === AVAILABLE_PAGES.SPECBOT)
                return <SpecBot callback={this.changePage}/>;
            else if(this.state.currentPage === AVAILABLE_PAGES.DATBOT)
                return <DatBot callback={this.changePage}/>
        }else{
            return <Splash callback={this.initialized}/>;
        }
    }

    render() {
        console.log(this.state);
        let swipe = this.sipweValue.interpolate({
            inputRange: [0, 1],
            outputRange: ["0%", "-100%"]
        });

        if(this.state.currentPage !== AVAILABLE_PAGES.MENU)
            swipe = 0;

        return (
            <Animated.View style={{...styles.darkContainer, left: swipe}}>
                {this.getWindow()}
            </Animated.View>
        );
    }
}

const styles = {
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },

    darkContainer: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center'
    },
};
