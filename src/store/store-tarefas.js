import Vue from "vue";

const state = {
  tarefas: {
    ID1: {
      nome: "Comprar bananas",
      completada: false,
      dataPrazo: "17/07/2022",
      horarioPrazo: "18:30",
    },
    ID2: {
      nome: "Enviar e-mail para o coordenador",
      completada: false,
      dataPrazo: "29/07/2022",
      horarioPrazo: "12:00",
    },
    ID3: {
      nome: "Marcar consulta na dentista",
      completada: false,
      dataPrazo: "15/11/2022",
      horarioPrazo: "18:00",
    },
  },
};

const mutations = {
  atualizarTarefa(state, payload) {
    console.log(payload);
    Object.assign(state.tarefas[payload.id], payload.updates);
  },
  deletarTarefa(state, id) {
    delete state.tarefas[id]
  },
};

const actions = {
  atualizarTarefa({ commit }, payload) {
    commit("atualizarTarefa", payload);
  },
  deletarTarefa({ commit }, id) {
    commit("deletarTarefa", id);
  },
};

const getters = {
  tarefas: (state) => {
    return state.tarefas;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
