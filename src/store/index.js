import { createStore } from "vuex";
import users from '@/store/users.js'
import messages from '@/store/messages.js'

const store = createStore({
    modules: {
        users: users,
        messages: messages,
    },
    state: {
        
    },
    mutations: {
        
    },
    actions: {
        
    },
    getters: {
        
    },
})

export default store

