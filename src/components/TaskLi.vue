<template>
    
    <ul>
        <li>{{localTask.description}}</li>
        <li>{{localTask.complete}}</li>
        <button @click="editTask(localTask)">Edit</button>
        <button @click="detailTask(localTask)">View</button>
        <button @click="deleteTask(localTask)">Delete</button>
    </ul>
</template>

<script>
import Task from '../models/Task';
import { useListTaskStore } from '../store/ListFormStore'
import { useFormTaskStore } from '../store/FormTaskStore'

import {mapActions}   from  'pinia'
export default {
   
    props: {
        task: {
            type: Task,
            required: true
        },
    },
    data() {
        return {
            localTask: new Task(),
        }
    },
    created() {
        this.localTask = this.task
       
    },
    methods: {
        ...mapActions(useFormTaskStore,['editTask','detailTask']),  
        ...mapActions(useListTaskStore,['deleteTask']),
    },
   
}
</script>

<style scoped>

</style>