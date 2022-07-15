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
  // tarefas: [
  //   {
  //     id: 1,
  //     nome: "Comprar bananas",
  //     completada: false,
  //     dataPrazo: "17/07/2022",
  //     horarioPrazo: "18:30",
  //   },
  //   {
  //     id: 2,
  //     nome: "Enviar e-mail para o coordenador",
  //     completada: false,
  //     dataPrazo: "29/07/2022",
  //     horarioPrazo: "12:00",
  //   },
  //   {
  //     id: 3,
  //     nome: "Marcar consulta na dentista",
  //     completada: false,
  //     dataPrazo: "15/11/2022",
  //     horarioPrazo: "18:00",
  //   },
  // ],
};

const mutations = {};

const actions = {};

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
