<script>
 
 
 import {RouterView,RouterLink} from 'vue-router';
 import { useListTaskStore } from '../store/ListFormStore'
 import { mapState } from 'pinia'
 import {mapActions}   from  'pinia'
  export default {
    name:"App",
    components: {
    
    },
    created() {
        console.log(2)
            this.createListFormLocalStore()
        },
    data(){
      return{
      
      }
    },
    methods: {
    ...mapActions( useListTaskStore,['createListFormLocalStore'])
    },
    computed: {
    ...mapState(useListTaskStore,['countTaskFinish','countTaskDontFinish']),
}, 
  }
  </script>
  
  <template>
    <p>TasksCompleted: {{countTaskFinish}}</p>
    <p>TasksDontCompleted: {{countTaskDontFinish}}</p>
    <nav>
      <router-link :to="{name:'formTask'}">Go to Form</router-link>
      <router-link :to="{name:'taskList'}">Go to List</router-link>
    </nav>
    <router-view></router-view>

   </template>
   