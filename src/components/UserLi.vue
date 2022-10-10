<template>
    <ul>
        <li>{{localUser.username}}</li>
        <li>{{localUser.userage}}</li>
        <button @click="editUser(localUser)">Edit</button>
    </ul>
</template>

<script>
import User from '../models/User';
export default {
    props: {
        user: {
            type: User,
            required: true
        },
    },
    data() {
        return {
            localUser: new User(),
        }
    },
    created() {
        this.localUser = this.user
        console.log(this.localUser)
    },
    methods: {
        editUser(user) {
            console.log(user)

            this.$emit('editUser', this.user)
        }
    },
}
</script>

<style scoped>

</style>