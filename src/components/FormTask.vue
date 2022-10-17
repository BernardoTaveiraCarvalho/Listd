<template>
    <form @submit.prevent="SubmitTask($event)">
        <div> 
            <label for="">{{task.description}}</label>
            <input type="text" name="description" v-model="task.description" id="««description"/>
            <label for="">{{task.complete}}</label>
            <input type="checkbox" name="complete"  v-model="task.complete" id="complete"/>
            <div class="error">{{error}}</div>
            <input type="submit"  />
        </div>
    </form>
   
</template>

<script>
      import Task from '../models/Task'
      import TaskList from './TaskList.vue'
      import validations from '../validations/validations'
      import { useFormTaskStore } from '../store/FormTaskStore'
      import { useListTaskStore } from '../store/ListFormStore'
      import {mapActions}   from  'pinia'
      import { mapWritableState } from 'pinia'
export default {
    data() {
        return {
          
            error: '',
        };
    },
    props: [
        "taskEdit"
    ]   ,
   
   computed: {
    ...mapWritableState(useFormTaskStore,['task']),
},
  
    methods: {
        ...mapActions(useListTaskStore,['createList','editList']),
 
        SubmitTask(e) {

            if(this.task.description == null){
                alert("Error form empty")
            }else{
                if(!this.task.id){
                    this.error=validations(this.task)
                    console.log(this.error)
                    this.createList(this.task)
                    this.task = new Task()
                }else{
                    this.editList(this.task)
                   
                    this.task = new Task()
                    
                }
            }
        },
        
    },
    emits:['createList','editList'],
    components: { TaskList }
};

</script>

<style scoped>
form>div{
    display: flex;
    flex-direction: column;
}
</style>

