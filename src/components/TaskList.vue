<template>
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
        created(){
            console.log("entrou")
            this.createListFormLocalStore()
        },
        methods:{
            ...mapActions(useListTaskStore,['createListFormLocalStore']),
        },
        computed: {
    ...mapState(useListTaskStore,['taskList']),
   
}, 
    components: { TaskLi }
}
</script>

<style scoped>

</style>