import {Bot} from "./Bot";

export class DashboardController{
    constructor(){
        this.sqlData = [];
        this.bots = [];
    }

    refreshSQLData(callback){
        let parent = this;

        fetch('https://datbot.lysandredebut.fr/app/php/getSQLData.php', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            .then((response) => response.json())
            .then((data) => {
                parent.sqlData = data;
                parent.bots = [];
                for(let i = 0; i < parent.sqlData.length; i++){
                    parent.bots.push(new Bot({name:parent.sqlData[i].name, data:parent.sqlData[i].data, position:parent.sqlData[i].position, banned:parent.sqlData[i].banned}));
                }
            })
            .then(() => {if(callback !== undefined){callback()}})
            .done();
    }

    getBotFromName(name){
        for(let i = 0; i < this.bots.length; i++){
            if(this.bots[i].name === name){
                return this.bots[i];
            }
        }
    }

    getNonBannedBots(){
        let nonBannedBots = [];
        for(let i = 0; i < this.bots.length; i++){
            if(this.bots[i].isBanned() == 0){
                nonBannedBots.push(this.bots[i]);
            }
        }

        return nonBannedBots;

    }

}