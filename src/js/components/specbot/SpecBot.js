import React from 'react';
import { Text, View, Animated, Easing, WebView } from 'react-native';

export class SpecBot extends React.Component{
    constructor(props){
        super(props);
        this.fadeValue = new Animated.Value(0);

        this.fadeIn = this.fadeIn.bind(this);
    }

    static navigationOptions = {
        title: 'SpecBot'
    };

    componentDidMount(){
        this.fadeIn();
    }

    fadeIn(){
        this.fadeValue.setValue(0);
        Animated.timing(this.fadeValue, {toValue: 1, duration: 500, easing: Easing.linear}).start();
    }

    render(){
        const fade = this.fadeValue.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1]
        });

        return(
            <WebView
                source={{uri: 'https://madoff.lysandredebut.fr/index.php'}}
            />
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
};
