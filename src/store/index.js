import { createStore } from 'vuex'

const store = createStore({


    state: {
        //define variables
        token : localStorage.getItem('token') || 0,
        name : localStorage.getItem('fx_name') || 0,
        email : localStorage.getItem('fx_email') || 0,
        avatar : localStorage.getItem('fx_avatar') || 0
    },

    mutations:{
        // update variable value
        UPDATE_TOKEN(state,payload){
            state.token = payload
        },
        UPDATE_NAME(state,payload){
            state.name = payload
        },
        UPDATE_EMAIL(state,payload){
            state.email = payload
        },
        UPDATE_AVATAR(state,payload){
            state.avatar = payload
        }
    },

    actions:{
        // action to be performed
        setToken(context,payload){
            localStorage.setItem('token',payload)
            context.commit('UPDATE_TOKEN',payload)
        },

        setName(context,payload){
            localStorage.setItem('fx_name',payload)
            context.commit('UPDATE_NAME',payload)
        },

        setEmail(context,payload){
            localStorage.setItem('fx_email',payload)
            context.commit('UPDATE_EMAIL',payload)
        },
        setAvatar(context,payload){
            localStorage.setItem('fx_avatar',payload)
            context.commit('UPDATE_AVATAR',payload)
        },

        removeToken(context){
            localStorage.removeItem('token');
            context.commit('UPDATE_TOKEN', 0);
        },
        removeAll(context){
            localStorage.removeItem('token');
            localStorage.removeItem('fx_name');
            localStorage.removeItem('fx_email');
            localStorage.removeItem('fx_avatar');
            context.commit('UPDATE_TOKEN', 0);
            context.commit('UPDATE_NAME', 0);
            context.commit('UPDATE_EMAIL', 0);
            context.commit('UPDATE_AVATAR', 0);
        },
    },

    getters:{
        // get state variable value
        getToken: function(state){
            return state.token
        },

        getName: function(state){
            return state.name
        },

        getEmail: function(state){
            return state.email
        },

        getAvatar: function(state){
            return state.avatar
        }
    }

})

export default store;
