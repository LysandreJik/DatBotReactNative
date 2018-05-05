import React from 'react';
import { Text, View, Image, TouchableOpacity, Linking} from 'react-native';
// import Data from "../structure/Data";
import { Font } from 'expo';

export class Menu extends React.Component{
    constructor(){
        super();
        this.state = {fontLoaded: false};
    }

    static navigationOptions = {
        title: 'Menu',
    };

    async componentDidMount(){
        await Font.loadAsync({
            "ArtBrewery": require('../../../assets/fonts/ArtBrewery.ttf')
        });

        console.log("Font loaded ! ");
        this.setState({fontLoaded: true});
    }

    render(){
        console.log(this.state.fontLoaded);
        if(this.state.fontLoaded){
            return(
                <View style={styles.container}>
                    <View style={[styles.boxContainer, styles.boxOne]}>
                        <Image style={styles.image} source={require('../../images/specbot.png')}/>
                        <MenuItem callback={{isLink: false, link: () => this.props.navigation.navigate("SpecBot")}} text={"SpecBot"}/>
                    </View>
                    <View style={[styles.boxContainer, styles.boxTwo]}>
                        <Image style={styles.image} source={require('../../images/datbot.png')}/>
                        <MenuItem callback={{isLink: false, link:() => this.props.navigation.navigate("DatBot")}} text={"DatBot"}/>
                    </View>
                    <View style={[styles.boxContainer, styles.boxThree]}>
                        <Image style={styles.image} source={require('../../images/sniffer.png')}/>
                        <MenuItem callback={{isLink: true, link:'https://github.com/LysandreJik/DatBotSniffer'}} text={"Sniffer"} small={false}/>
                    </View>
                    <View style={[styles.boxContainer, styles.boxFour]}>
                        <MenuItem callback={{isLink: true, link:'https://github.com/ProjectBlackFalcon'}} text={"Bbf"} small={true}/>
                        <MenuItem callback={{isLink: true, link:'https://github.com/Ugdha'}} text={"Ugdha"} small={true}/>
                        <MenuItem callback={{isLink: true, link:'https://github.com/BaptisteBdn'}} text={"Cen"} small={true}/>
                        <MenuItem callback={{isLink: true, link:'http://lysandredebut.fr'}} text={"Jik"} small={true}/>
                    </View>
                </View>
            );
        }else{
            return <View style={styles.container}><Text>Loading ...</Text></View>;
        }
    }
}

class MenuItem extends React.Component{
    constructor(props){
        super(props);
        this.style = this.props.small ? styles.textSmall : styles.text;

        this.onPress = this.onPress.bind(this);
    }

    onPress(){
        if(this.props.callback.isLink){
            Linking.openURL(this.props.callback.link);
        }else{
            this.props.callback.link();
        }
    }

    render(){
        return(
            <TouchableOpacity onPress={this.onPress}>
                <Text style={{...this.style, fontFamily:"ArtBrewery"}}>{this.props.text}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = {
    container: {
        backgroundColor: 'white',
        flex: 1,
        flexDirection: "column",
        width: "100%"
    },

    boxContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    boxOne: {
        flex: 3,

    }, 

    boxTwo: {
        flex: 3,
    },

    boxThree: {
        flex: 3,
    },

    boxFour: {
        flexDirection: "row",
        justifyContent: "space-around"
    },

    text: {
        color: "white",
        fontSize: 60,
        textDecorationLine: 'underline'
    },

    textSmall: {
        color: "black",
        fontSize: 40
    },

    image: {
        backgroundColor: '#ccc',
        flex: 1,
        resizeMode: 'cover',
        position: 'absolute',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
    }
};