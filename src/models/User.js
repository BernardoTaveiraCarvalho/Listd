import { v4 as uuidv4 } from 'uuid';

export default class User{
    constructor(id = null, username, userage){
        this.id = id;
        this.username= username;
        this.userage= userage;
    }

    generateId(){
        this.id = uuidv4();
    }

    toObject(){
        return {
            id : this.id,
            username: this.username,
            userage : this.userage
        }
    }
}