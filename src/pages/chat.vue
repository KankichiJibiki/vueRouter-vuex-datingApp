<template>
    <div class="chatbox container-fluid mx-auto" style="margin-top: 100px;">
        <div v-for="message in this.getMessage" :key="message.id" class="message mb-5">
            <div class="row">
                <div class="col" id="chat">
                    <div class="d-flex flex-column justify-content-center">
                        <span class="fs-5 fw-bolder">{{ message.chat }}</span>
                        <span>{{ message.time.toLocaleString() }}</span>
                    </div>
                </div>
                <div class="col">
                    <img :src="this.getImage(message.id)" :alt="message.chat" id="icon">
                </div>
            </div>
        </div>
        <div class="mb-3 input-group col-12">
            <input type="text" v-model="message" placeholder="Message here" class="col-11">
            <button class="btn btn-success input-group-btn" @click="sendMessage">
                Send
            </button>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                message: '',
                messageHistory: this.getMessage,
            }
        },
        methods: {
            sendMessage(){
                console.log(this.message);
                this.$store.dispatch('messages/setMessages', {id: this.$route.params.id, message: this.message});
                this.message = "";
            },
            getImage(id){
                let user = this.$store.getters['users/getUserById'](id);
                console.log(user);
                return user.picture.medium;
            }
        }, 
        computed: {
            getMessage(){
                this.messageHistory = this.$store.getters['messages/getMessagesById'](this.$route.params.id);
                return this.$store.getters['messages/getMessagesById'](this.$route.params.id);
            },
        }
    }
</script>