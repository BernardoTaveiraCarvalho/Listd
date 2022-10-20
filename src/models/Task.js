import { v4 as uuidv4 } from 'uuid';

export default class Task{
    constructor(id = null, description , complete= false){
        this.id = id;
        this.description= description;
        this.complete= complete;
    }
    
    generateId(){
        this.id = uuidv4();
    }
    copyObject(task){
        
        this.id = task.id;
        this.description= task.description;
        this.complete= task.complete;
    }

}