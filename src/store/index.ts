import Vue from 'vue';
import Vuex from 'vuex';

import state from './state';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';
import { State } from './types';
import LocalStorage from '../LocalStorage';

Vue.use(Vuex)

const store = new Vuex.Store<State>({
    state,
    actions,
    getters,
    mutations 
});

store.subscribe((mutation, state) => {
	LocalStorage.setStore(state);
});

export default store;