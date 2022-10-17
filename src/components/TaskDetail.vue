<script>
 
 import { useListTaskStore } from '../store/ListFormStore'

 import {mapActions}   from  'pinia'
  export default {
    name:"App",
    components: {
    
    },
    data(){
      return{
      
      }
    },
    methods: {
    ...mapActions( useListTaskStore,['findTask'])
    },
  
  }
  </script>
  
  <template>
 
   <ul>
        <li>{{findTask($route.params.id).description}}</li>
        <li>{{findTask($route.params.id).complete}}</li>
    </ul>
   </template>
