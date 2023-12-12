import mutations from './mutation.js';
import actions from './action.js';
import getters from './getters.js';


export default {
    namespaced:true,
    state(){
        return {
            requests: []
        }
    },
    mutations: mutations,
    actions: actions,
    getters: getters
    
}