import Vue from 'vue'
import Vuex from 'vuex'
import { PessoaFisicaService } from '../services/pessoa-fisica-service.js'
import { ADD_PESSOA_FISICA, UPDATE_PESSOA_FISICA } from './mutations.js'

Vue.use(Vuex);

const state = () => ({
  pessoasFisicas: []
});

const mutations = {
  [ADD_PESSOA_FISICA](state, pessoaFisica) {
    state.pessoasFisicas.unshift(pessoaFisica);
  },
  [UPDATE_PESSOA_FISICA](state, pessoaFisica) {
    const index = state.pessoasFisicas.findIndex(h => h.id === pessoaFisica.id);
    state.pessoasFisicas.splice(index, 1, pessoaFisica);
    state.pessoasFisicas = [...state.pessoasFisicas];
  },
  ["getPessoasFisicas"](state, pessoasFisicas) {
    state.pessoasFisicas = pessoasFisicas;
  }
};

const actions = {
  async addPessoaFisicaAction({ commit }, pessoaFisica) {
    const addedPessoaFisica = await PessoaFisicaService.addPessoasFisica(pessoaFisica);
    commit(ADD_PESSOA_FISICA, addedPessoaFisica);
  },
  async getPessoasFisicasAction({ commit }) {
    const result = await PessoaFisicaService.getPessoasFisicas();
    commit("getPessoasFisicas", result);
  },
  async updatePessoaFisicaAction({ commit }, pessoaFisica) {
    const updated = await PessoaFisicaService.updatePessoasFisica(pessoaFisica);
    commit(UPDATE_PESSOA_FISICA, updated);
  }
};

const getters = {
  getPessoaFisicaById: state => id => state.pessoasFisicas.find(h => h.id === id)
};

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state,
  mutations,
  actions,
  getters,
});
