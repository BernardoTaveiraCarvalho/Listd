import { defineStore } from 'pinia'
import Task from '../models/Task'

export const useListTaskStore = defineStore('ListTaskStore',{
    state: () =>({
        taskList: [],
        countTaskFinish: 0,
        countTaskDontFinish:0
        }),
    getters:{
        getTaskList: (state) =>state.taskList,   
        getTaskListFinish: (state) =>state.taskList.filter(task => task.complete == true),
        getTaskListDontFinish: (state) =>state.taskList.filter(task => task.complete ==false), 
        getCountTaskFinish : (state)=>state.countTaskFinish,
        getCountTaskDontFinish:(state)=>state.countTaskDontFinish,
    },
    actions:{
        filterList(value){
         if(value != null) {
            return this.taskList.filter(task => task.complete == value);  
         }
           return this.taskList
        },
        changeTaskCount(task){
            if(task.complete ===true){
                console.log(this.CountTaskFinish)
                this.countTaskFinish++
                localStorage.setItem('countTaskFinish',this.countTaskFinish)
            }else{
                console.log(this.CountTaskDontFinish)
                this.countTaskDontFinish++
                localStorage.setItem('countTaskDontFinish',this.countTaskDontFinish)
            }
        },
        createTaskCount(){
            this.countTaskFinish=localStorage.getItem('countTaskFinish')
            this.countTaskDontFinish=localStorage.getItem('countTaskDontFinish')
        },
        createListFormLocalStore(){
           
            const storeObject =JSON.parse(localStorage.getItem('taskArray'))
            if(storeObject !=null){
            for(let i=0;i<storeObject.length;i++){
                this.taskList[i] = new Task(storeObject[i].id,storeObject[i].description,storeObject[i].complete)      
            }
            }
            this.createTaskCount()
        },
        createList(task){
            task.generateId()
            this.taskList.push(task)
            localStorage.setItem('taskArray', JSON.stringify(this.taskList))
            this.changeTaskCount(task)
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
           let  element=  this.findTask(task.id)
            element.copyObject(task)
            localStorage.setItem('taskArray', JSON.stringify(this.taskList))
          },
          deleteTask(task){
        if(task.complete===false){
            for(let i =0;i<this.taskList.length;i++){
                console.log(this.taskList)
                if(this.taskList[i].id==task.id){
                   this.taskList.splice(i, 1)
                   localStorage.setItem('taskArray', JSON.stringify(this.taskList))
                }
            }
            this.countTaskDontFinish--
            localStorage.setItem('countTaskDontFinish',this.countTaskDontFinish)
        }else{
            alert("Task cant be deleted")
        }
     }
    }
})