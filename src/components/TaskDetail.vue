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
   created() {
        console.log(2)
            this.createListFormLocalStore()
        },
    methods: {
    ...mapActions( useListTaskStore,['findTask','createListFormLocalStore'])
    },
  
  }
  </script>
  
  <template>
 
   <ul>
        <li>{{findTask($route.params.id).description}}</li>
        <li>{{findTask($route.params.id).complete}}</li>
    </ul>
   </template>
