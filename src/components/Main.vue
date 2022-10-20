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
    <nav>
     <a><router-link :to="{name:'formTask'}">Go to Form</router-link></a>
     <a><router-link :to="{name:'taskList'}">Go to List</router-link></a>
    </nav>
    <div>
    <p>TasksCompleted: {{countTaskFinish}}</p>
    <p>TasksDontCompleted: {{countTaskDontFinish}}</p>
    <router-view>
    </router-view>
    </div>
   

   </template>
   <style>
   body{
    background-image: url("https://static.vecteezy.com/system/resources/previews/001/987/871/original/abstract-black-stripes-diagonal-background-free-vector.jpg");
    background-size: 100% 100%;
   }
   ul {
  
	padding: 0;
	
}
  nav{
    position: absolute;
    top: 15px;
    left: 10px;
    gap: 22px;
  }
 nav>a{
   font-size: large;
   padding-left: 20px;
   
 }

   </style>