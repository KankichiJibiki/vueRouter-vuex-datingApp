import axios from 'axios'

const users = {
    namespaced: true,
    
    state: {
        userList: {},
        isUser: false,
    },
    mutations: {
        setUsers(state, userObj){
            if(!this.isUser){
                for(let i = 0; i < userObj.length; i++){
                    let id = userObj[i].login.uuid;
                    state.userList[id] = userObj[i];
                }
                
                console.log(userObj);
                console.log(userObj.length);
                console.log(state.userList);
            }

        }
    },
    actions: {
        fetchUsers({ commit }, payload){
            axios(payload)
            .then(res => commit('setUsers', res.data.results))
            .catch(error => console.log(error))
        }
    },
    getters: {
        getUserById: (state) => (id) =>{
            console.log('worked');
            console.log(state.userList[id]);
            return state.userList[id];
        }
    },
}

export default users