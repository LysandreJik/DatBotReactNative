import React from 'react';
import { Text, View, Animated, Easing, ActivityIndicator } from 'react-native';
import {DatBot} from "./DatBot";

export default class Fetching extends React.Component{
    constructor(props){
        super(props);
        this.fetchData = this.fetchData.bind(this);
    }

    componentDidMount(){
        setTimeout(() => this.fetchData(), 1000);
    }

    fetchData(){
        DatBot.getController().refreshSQLData(this.props.callback);
    }

    render(){
        return(
            <View>
                <ActivityIndicator size="large" color="rgb(190, 50, 50)" />
                <Text style={styles.text}>{"\n"}Fetching data ...</Text>
            </View>
        );
    }
}


const styles = {
    text: {
        color:"rgb(190, 50, 50)"
    }
};