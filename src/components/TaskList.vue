<template>
  Filter Table: <select @change="handleChange" name="filter" id="filter">
  <option value=true>True</option>
  <option value=false>False</option>
  <option selected value=null>None</option>

</select>
    <ul>
        <TaskLi   v-for="task in taskList" :task="task" :key="task.id" ></TaskLi>
    </ul>
</template>

<script>
    import TaskLi from './TaskLi.vue';
    import { mapState } from 'pinia'
    import {mapActions} from 'pinia'
    import { useListTaskStore } from '../store/ListFormStore'
    export default{
        
        computed: {
    ...mapState(useListTaskStore,['taskList','filterList']),
   
}, 
methods:{
    handleChange(e) {
        console.log(e.target.options.selectedIndex)
        if(e.target.options.selectedIndex  ==0  ) {
            this.filterList(true)
        }else if(e.target.options.selectedIndex ==1){
            this.filterList(false)
        }else{
            this.filterList(null)
        }
    }
},
    components: { TaskLi }
}
</script>

<style scoped>

</style>