import React from 'react';
import {Animated, Easing} from 'react-native';
import Splash from "./Splash";
import {Menu} from "./Menu";
import {SpecBot} from "./specbot/SpecBot";
import {DatBot} from "./datbot/DatBot";

export const AVAILABLE_PAGES = {
    MENU: 0,
    SPECBOT: 1,
    DATBOT: 2
};


export default class MainApp extends React.Component {
    constructor(props){
        super(props);
        this.getWindow = this.getWindow.bind(this);
        this.changePage = this.changePage.bind(this);
        this.initialized = this.initialized.bind(this);
        this.state = {init: true, currentPage: AVAILABLE_PAGES.MENU};
        this.sipweValue = new Animated.Value(0);

        this.swipeLeft = this.swipeLeft.bind(this);

        console.log("props", this.props);
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
            outputRange: ["0%", "100%"]
        });

        if(this.state.currentPage !== AVAILABLE_PAGES.MENU)
            swipe = 0;

        console.log("current page", this.state.currentPage, swipe);

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