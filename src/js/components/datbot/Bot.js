export class Bot{
    constructor(props){
        this._name = props.name;
        this._position = props.position;
        this._data = props.data;
        this._banned = props.banned;
    }

    getName(){
        return this._name;
    }

    getPosition(){
        return this._position;
    }

    getData(){
        return this._data;
    }

    isBanned(){
        return this._banned;
    }
}