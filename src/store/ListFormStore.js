import { defineStore } from 'pinia'
import Task from '../models/Task'
let number=0;
export const useListTaskStore = defineStore('ListTaskStore',{
    state: () =>({
        taskList: []
        }),
    getters:{
        getUserList: (state) =>state.taskList       
  
    },
    actions:{
        createListFormLocalStore(){
            for(let i=0;i<localStorage.getItem('number');i++){
                this.taskList[i] = new Task(localStorage.getItem('taskId'+i),localStorage.getItem('taskDescription'+i),localStorage.getItem('taskComplete'+i))
            }
        },
        createList(task){
            task.generateId()
            localStorage.setItem('number',number)
            localStorage.setItem('taskId'+number,task.id)
            localStorage.setItem('taskDescription'+number,task.description)
            localStorage.setItem('taskComplete'+number,task.complete)
            number++
            this.taskList.push(task)
            localStorage.setItem('taskArray', this.taskList)
         
          },
          findTask(id){
            let taskFinded
            this.taskList.forEach(element => {
                console.log(element.id)
                    if(id==element.id){
                        taskFinded=element
                    }
                });
                return taskFinded
          },
          editList(task){  
            console.log(task.id)
           let  element=  this.findTask(task.id)
            element.copyObject(task)
          },
          deleteTask(task){
            console.log(task.complete)
           console.log("a")
           console.log(task.complete==false)
           console.log("a")
           console.log(task.complete=false)

            if(task.complete==false){
            for(let i =0;i<this.taskList.length;i++){
                console.log(this.taskList)
                if(this.taskList[i].id==task.id){
                    console.log(i)
                    localStorage.removeItem('taskId'+i)
                    localStorage.removeItem('taskDescription'+i)
                    localStorage.removeItem('taskComplete'+i)
                   
                   this.taskList.splice(i, 1)
                }
                console.log("A");
                console.log(this.taskList)
            }
        }else{
            alert("Task cant be deleted")
        }
          }
    }
})