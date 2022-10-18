<template>
    <div class="userCard card bg-light p-2 shadow mb-3" style="width: 200px;">
        <img :src="user.picture.large" :alt="user.name.first" class="img-thumbnail">
        <h6 class="text-center text-dark text-decoration-none border-0">{{ user.name.first + " " + user.name.last }}</h6>
        <div class="mb-2">
            Age: {{ user.dob.age }}
        </div>
        <div class="mb-2">
            Country: {{ user.location.country }}
        </div>
        <div class="mb-2">
            <router-link 
                class="btn btn-outline-dark text-uppercase"
                :to="{ name: 'user.show', params: {id: user.login.uuid }}"
                :user="user"
            >
                profile
            </router-link>
            <router-link
                class="text-uppercase btn btn-outline-primary"
                :to="{name: 'user.chat', params: {id: user.login.uuid}}"
            >
                message
            </router-link>
        </div>
    </div>
</template>
<script>
    import UserDetails from '@/components/UserDetails.vue';
    export default{
        props: {
            user: {
                type: Object,
                required: true,
            },
            components: {UserDetails}
        }
    }

</script>