import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
console.log(Vuex)
// tabbar选中状态
const session = window.sessionStorage;

const state = {
	tabbarSelectedIndex: session.tabbarSelectedIndex,
	// lastSelectedPath: '/home/jingxuan',
  //home页面子路径的选择
  lastSelectedPath: '/home',
	loginInfo: {username:session.username,password:session.password}
}
const mutations = {
	SET_TABBAR_SELECTED_INDEX(state,content){
		session.setItem("tabbarSelectedIndex",content);
		state.tabbarSelectedIndex = session.tabbarSelectedIndex;
	},
	SET_LAST_SELECTED_PATH(state,content){
		state.lastSelectedPath = content;
	},
	SET_LOGIN_INFO(state,content){
		state.loginInfo.username = content.username;
		state.loginInfo.password = content.password;
		session.setItem('username',content.username);
	}
}
const actions = {
	UPDATE_TABBAR_SELECTED_INDEX(context,content){
		context.commit('SET_TABBAR_SELECTED_INDEX',content);
	},
	UPDATE_LAST_SELECTED_PATH({commit},content){
		commit('SET_LAST_SELECTED_PATH',content);
	},
	UPDATE_LOGIN_INFO({commit},content){
		commit('SET_LOGIN_INFO',content)
	}
}
const getters = {
	GET_TABBAR_SELECTED_INDEX(state){
		console.log(session.tabbarSelectedIndex);
		return state.tabbarSelectedIndex;
	},
	GET_LAST_SELECTED_PATH(state){
		return state.lastSelectedPath;
	},
	GET_LOGIN_INFO(state){
		return state.loginInfo;
	}
}

export default new Vuex.Store({
	state,
	getters,
	mutations,
	actions
})
