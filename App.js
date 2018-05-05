import React from 'react';
import {StackNavigator} from 'react-navigation';
import {DatBot} from "./src/js/components/datbot/DatBot";
import {Menu} from "./src/js/components/Menu";
import {SpecBot} from "./src/js/components/specbot/SpecBot";
import BotInformation from "./src/js/components/datbot/botinfo/BotInformation";

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

        BotInformation: {
            screen: BotInformation
        }
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


