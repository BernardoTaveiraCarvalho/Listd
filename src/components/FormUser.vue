<template>
    <form @submit.prevent="SubmitUser($event)">
        <div> 
            <label for="">{{user.username}}</label>
            <input type="text" name="username" v-model=user.username id="username"/>
            <label for="">{{user.userage}}</label>
            <input type="text" name="userage"  v-model=user.userage id="userage"/>
            <div class="error">{{error}}</div>
            <input type="submit"  />
        </div>
    </form>
 
</template>

<script>
      import User from '../models/User'
      import UserList from './UserList.vue'
      import validations from '../validations/validations'

export default {
    data() {
        return {
            user: new User(),
            error: '',
        };
    },
    props: {
        edit: Boolean,
        userEdit : {
            type: User
        },
       
    },
    beforeUpdate(){
        if(this.userEdit.id)
            debugger
            this.user = new User(this.userEdit.toObject())
    },
    methods: {
        SubmitUser(e) {

            if(this.user.userage == null || this.user.username == null){
                alert("Error form empty")
            }else{
                if(!this.user.id){
                    this.error=validations(this.user)
                    console.log(this.error)
                    this.$emit('createList',this.user)
                    this.user = new User()
                }
            }
        },
        
    },
    components: { UserList }
};

</script>

<style scoped>
form>div{
    display: flex;
    flex-direction: column;
}
</style>

