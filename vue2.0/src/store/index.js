/*
 * @Author: dinghaizhou
 * @Date: 2021-10-08 14:52:00
 * @Last Modified by: dinghaizhou
 * @Last Modified time: 2022-01-25 11:51:28
 */

/* eslint-disable camelcase */

import Vue from 'vue';
import Vuex from 'vuex';
import getters from './getters.js';
import mutations from './mutations.js';
import state from './state.js';
import actions from './actions.js';

Vue.use(Vuex);

export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions
});
