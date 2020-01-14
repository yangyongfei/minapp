import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
		actileDetail:'', // 文章详情
	},
    mutations: {
		UPDATADETAL(state,msg){
			state.actileDetail = msg
		}
	},
    actions: {}
})

export default store

