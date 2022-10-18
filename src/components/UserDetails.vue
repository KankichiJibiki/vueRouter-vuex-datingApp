<template>
    <div class="d-flex justify-content-center">
        <div class="col-7 user-detail" style="margin-top: 100px;">
            <div class="card p-2">
                <img :src="this.user.picture.large" :alt="this.user.name.first" class="mb-3 img-thumbnail">
                <div class="mb-3">
                    <router-link
                        class="btn btn-outline-dark"
                        :to="{name: 'user.chat', params: {id: $route.params.id}}"
                    >
                        Message
                    </router-link>
                </div>
                <table class="table table-hover table-striped">
                    <tbody>
                        <tr>
                            <th>Name</th>
                            <td>
                                {{ this.user.name.first + " " + this.user.name.last}}
                            </td>
                        </tr>
                        <tr>
                            <th>Gender</th>
                            <td>
                                {{ this.user.gender}}
                            </td>
                        </tr>
                        <tr>
                            <th>Country</th>
                            <td>
                                {{ this.user.location.country }}
                            </td>
                        </tr>
                        <tr>
                            <th>State</th>
                            <td>
                                {{ this.user.location.state }}
                            </td>
                        </tr>
                        <tr>
                            <th>State</th>
                            <td>
                                {{ this.user.location.city }}
                            </td>
                        </tr>
                        <tr>
                            <th>Age</th>
                            <td>
                                {{ this.user.dob.age }}
                            </td>
                        </tr>
                        <tr>
                            <th>E-mail</th>
                            <td>
                                {{ this.user.email }}
                            </td>
                        </tr>
                        <tr>
                            <th>id</th>
                            <td>
                                {{ $route.params.id }}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                user: '',
                uuid: this.$route.params.id,
            }
        },  
        props: {
            id:{
                type: String,
                required: true,
            }
        },
        created: function(){
            console.log(this.$store.getters['users/getUserById'](this.uuid));
            this.user = this.$store.getters['users/getUserById'](this.uuid);
        }
    }
</script>