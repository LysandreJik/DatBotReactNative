import React from 'react';
import {StackNavigator} from 'react-navigation';
import MainApp from './src/js/components/App';
import {DatBot} from "./src/js/components/datbot/DatBot";
import {Menu} from "./src/js/components/Menu";
import {SpecBot} from "./src/js/components/specbot/SpecBot";

console.disableYellowBox = true;


const RootStack = StackNavigator(
    {
        Home: {
            screen: Menu,
        },

        DatBot: {
            screen: DatBot,
        },

        SpecBot: {
            screen: SpecBot,
        },
    },
    {
        initialRouteName: 'Home',
    }
);

export default class App extends React.Component{
    render(){
        return <RootStack/>;
    }
}


