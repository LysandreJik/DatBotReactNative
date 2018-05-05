import React from 'react';
import { Text, View, Button, Image } from 'react-native';

let STATES = {
    INITIAL: 0,
    GOOD: 1,
    BAD: 2
}

export class MainComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {current: STATES.INITIAL};
    }

    getGood(){
        return(
            <View>
                <Image source={require('./../../images/good_tod.png')}/>
                <Text>The best of tods</Text>
                <Button onPress={() => this.setState({current:STATES.BAD})} color="red" title="Sly old tod"/>
            </View>
        )
    }

    getBad(){
        return(
            <View>
                <Button onPress={() => this.setState({current:STATES.GOOD})} color="green" title="Good tod"/>
                <Text>The sneezy slazzy tod</Text>
                <Image source={require('./../../images/bad_tod.png')}/>
            </View>
        )
    }

    getInitial(){
        return(
            <View>
                <Button onPress={() => this.setState({current:STATES.GOOD})} color="green" title="Good tod"/>
                <Button onPress={() => this.setState({current:STATES.BAD})} color="red" title="Sly old tod"/>
            </View>
        )
    }

    render(){
        switch(this.state.current){
            case STATES.INITIAL:
                return this.getInitial();
            case STATES.GOOD:
                return this.getGood();
            case STATES.BAD:
                return this.getBad();
        }
    }
}

const styles = {
    image: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    }
};