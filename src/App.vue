<script>
  import FormUserVue from './components/FormUser.vue';
  import UserList from './components/UserList.vue';
  import User from './models/User';


  export default {
    name:"App",
    components: {
      FormUserVue,
      UserList
    },
    data(){
      return{
        userEdit : null,
        userList : []
      }
    },
    methods:{
      createList(user){
        user.generateId()
        
        this.userList.push(user)
      },
      editUser(user){
        console.log(user)
        this.userEdit = new User(user.toObject())
      }
    }
  }
  </script>
  
  <template>
  <FormUserVue @createList="createList" :user-edit="this.userEdit"></FormUserVue>
  <UserList :user-list="userList" @editUser="editUser"></UserList>
   </template>
  
  