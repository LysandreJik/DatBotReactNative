import React from 'react';
import { Text, View, Animated, Easing } from 'react-native';
import {DatBot} from "../DatBot";
import {Container, Content} from 'native-base';
import Swiper from 'react-native-swiper';


export default class BotInformation extends React.Component{
    constructor(props){
        super(props);
        this.fadeValue = new Animated.Value(0);

        this.fadeIn = this.fadeIn.bind(this);
    }

    static navigationOptions = ({ navigation }) => {
        const { params } = navigation.state;

        return {
            title: params.title,
            headerStyle: {
                backgroundColor: "rgb(50, 50, 50)"
            },
            headerTintColor: '#fff',
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
            <Swiper style={styles.height}>
                <View style={styles.container}>
                    <Text>
                        Actual occupation
                    </Text>
                </View>
                <View style={styles.container}>
                    <Text>
                        Graphs
                    </Text>
                </View>
                <View style={styles.container}>
                    <Text>
                        Map
                    </Text>
                </View>
            </Swiper>
        )
    }
}

const styles = {
    container: {
        flex: 1,
        backgroundColor: 'rgb(50, 50, 50)',
        alignItems: 'center',
        justifyContent: 'center',
        width: "100%",
        height: "100%"
    },
};
