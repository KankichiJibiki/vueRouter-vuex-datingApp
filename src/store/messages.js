
const messages = {
    namespaced: true,
    state: {
        messages: {},
    },
    mutations: {
        setMessages(state, {id, message}){
            let date = new Date();
            let chatSet = {
                id: id,
                chat: message,
                time: date,
            };

            if(state.messages[id] === undefined){
                state.messages[id] = [chatSet];
            } else {
                state.messages[id].push(chatSet);
            }

            console.log(state.messages);
            let replyLists = [
                'Hi',
                'Nice to meet you',
                'Im glad you texted me',
                'bye',
                'You rude',
                'You A hole',
                'Mind your own business',
                'Wow'
            ]

            let start = setInterval(function() {
                let ranNum = Math.floor(Math.random() * (replyLists.length-0) + 0);
                console.log(ranNum);
                let chatSet = {
                    id: id,
                    chat: replyLists[ranNum],
                    time: new Date(),
                };
                state.messages[id].push(chatSet);
                console.log(state.messages);
                clearInterval(start);
            }, 25000);

        },
    },
    actions: {
        setMessages({ commit }, {id, message}){
            console.log(message);
            commit('setMessages', {id: id, message: message});
        }
    },
    getters: {
        getMessagesById: (state) => (id) =>{
            console.log(state.messages[id]);
            return state.messages[id];
        }
}
}

export default messages