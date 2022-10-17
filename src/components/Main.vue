<script>
 
 
 import {RouterView,RouterLink} from 'vue-router';

  export default {
    name:"App",
    components: {
    
    },
    data(){
      return{
      
      }
    },
   
  }
  </script>
  
  <template>
    
    <nav>
      <router-link :to="{name:'formTask'}">Go to Form</router-link>
      <router-link :to="{name:'taskList'}">Go to List</router-link>
    </nav>
    <router-view></router-view>

   </template>
   