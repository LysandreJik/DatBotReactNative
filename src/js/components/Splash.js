import React from 'react';
import {Animated, Easing} from 'react-native';

export default class Splash extends React.Component{
    constructor(props){
        super(props);
        this.fadeValue = new Animated.Value(0);

        this.fadeOut = this.fadeOut.bind(this);
    }

    componentDidMount(){
        console.log("Mounted");
        let parent = this;
        setTimeout(function(){parent.fadeOut(); console.log("Fading out")}, 2000);
    }

    fadeOut(){
        this.fadeValue.setValue(0);
        Animated.timing(this.fadeValue, {toValue: 1, duration: 500, easing: Easing.linear}).start(this.props.callback);
    }

    render(){
        const fade = this.fadeValue.interpolate({
            inputRange: [0, 1],
            outputRange: [1, 0]
          })
        return(
            <Animated.Image style={{...styles.image, opacity: fade}} source={require('./../../images/logo.png')}/>
        );
    }
}

const styles = {
    image: {
        height: "100%",
        width: "100%",
        resizeMode: 'contain'
    }
};
