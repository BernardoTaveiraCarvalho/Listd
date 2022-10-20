<template>
<div>
  Filter Table: <select v-model="selectedOption" @change="handleChange" name="filter" id="filter">
  <option    value=1>True</option>
  <option value=0>False</option>
  <option selected value=null>None</option>
  </select>
    <ul>
        <TaskLi   v-for="task in SetTaskList" :task="task" :key="task.id" ></TaskLi>
    </ul>
</div>
</template>

<script>
    import TaskLi from './TaskLi.vue';
    import { mapState } from 'pinia'
    import {mapActions} from 'pinia'
    import { useListTaskStore } from '../store/ListFormStore'
    export default{
        data (){
            return {
                selectedOption : null,
            }
        },
        computed: {
    ...mapState(useListTaskStore,['taskList','filterList','getTaskListFinish','getTaskListDontFinish']),
    SetTaskList(){
        console.log(this.selectedOption)
       
        if(this.selectedOption == 1){
            console.log("a")
            return this.getTaskListFinish
        }
        if(this.selectedOption == 0){
            return this.getTaskListDontFinish
        }
        return  this.taskList
    }
}, 
methods:{
 
    
},
    components: { TaskLi }
}
</script>

<style scoped>
div{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    justify-items: center;
}
ul{
    list-style-type: none;
    justify-content: center;
    align-self: center;
}
</style>
