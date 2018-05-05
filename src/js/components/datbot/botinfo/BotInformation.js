import React from 'react';
import { Text, View, Animated, Easing } from 'react-native';

export default class BotInformation extends React.Component{
    constructor(props){
        super(props);
        this.fadeValue = new Animated.Value(0);

        this.fadeIn = this.fadeIn.bind(this);
    }

    static navigationOptions = ({ navigation }) => {
        const { params } = navigation.state;

        return {
            title: params.title
        }
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
            <View style={styles.container}>
                <Animated.View style={{opacity: fade}}>
                    <Text>
                        Specbot mameneeee
                    </Text>
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
};
