<template>
    <h1>userlist</h1>
    <div class="d-flex flex-wrap justify-content-around align-items-center" style="margin-top: 50px;">
        <div v-for="user in this.users" :key="user.login.uuid">
            <UserLink :user="user"/>
        </div> 
    </div>
</template>
<script>
    import UserLink from '@/components/UserLink.vue';
    export default{
        data(){
            return{
                users: this.$store.state.users.userList,
            }
        },
        components: {
            UserLink,
        },
        methods: {
            setUser(){
                this.$store.dispatch('users/fetchUsers', 'https://randomuser.me/api/?results=30');
            }
        },
        created: function() {
            this.setUser();
        }
    }
</script>