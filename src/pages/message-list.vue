<template>
    <div class="message-list container mx-auto border p-4" style="margin-top: 100px;">
        <div v-for="user in this.getMessageList" :key="user.id" class="col-10">
            <router-link
                :to="{name: 'user.chat', params: {id: user.id}}"
                class="text-dark d-flex justify-content-center"
            >
                <div class="row">
                    <div class="col">
                        <img :src="this.getImage(user.id)" alt="No" id="icon" class="float-end">
                    </div>
                    <div class="col mb-4">
                        <div class="row">
                            <span class="fs-5 border-bottom">{{ user.chat }}</span>
                            <span>{{ user.time }}</span>
                        </div>
                    </div>
                </div>
            </router-link>
        </div>
    </div>
</template>
<script>
    export default{
        methods: {
            sortList(lists){
                Object.keys(lists.messages).forEach(function(key){
                    let result = lists.messages[key].sort(function(a, b){
                        return a.time < b.time ? 1 : -1;
                    });
                    console.log(result);
                }); 
                return lists;
            },
            makeListMaterial(lists){
                let newLists = [];
                Object.keys(lists.messages).forEach(function(key){
                    let chatList = {
                        id: key,
                        chat: lists.messages[key][0].chat,
                        time: lists.messages[key][0].time,
                    }
                    newLists.push(chatList);
                    console.log(lists.messages[key]);
                    console.log(lists.messages[key][0]);
                    console.log(lists.messages[key][0].chat);
                })
                console.log(newLists);
                return newLists;
            },
            getImage(id){
                let user = this.$store.getters['users/getUserById'](id);
                console.log(user);
                return user.picture.medium;
            }
        },  
        computed: {
            getMessageList(){
                let lists = this.$store.state.messages;
                lists = this.sortList(lists);
                console.log(lists);
                let displayLists = this.makeListMaterial(lists);

                return displayLists.reverse();
            }
        }
    }
</script>