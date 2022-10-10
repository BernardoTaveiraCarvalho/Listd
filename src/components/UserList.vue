<template>
    <ul>
        <UserLi @editUser="editUser"  v-for="user in userList" :user="user" ></UserLi>
    </ul>
</template>

<script>
    import UserLi from './UserLi.vue';
    export default{
    props: {
        userList: []
    },
    methods: {
        editUser(user){
            console.log(user)
            this.$emit('editUser', user)
        }
     },
    components: { UserLi }
}
</script>

<style scoped>

</style>