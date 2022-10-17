import { defineStore } from 'pinia'
import Task from '../models/Task'
import router from '../router'

export const useFormTaskStore = defineStore('FormTaskStore',{
    state: () =>({
        task: new Task()
        }),
    getters:{
        getTaskEdit: (state) =>state.task
    },
    actions:{
        editTask(newTask){     
            console.log(2)
            this.task.copyObject(newTask)
          },
          detailTask(newTask){
            console.log(newTask.id)
                router.push("/taskDetail/"+newTask.id)
          }
    }
})