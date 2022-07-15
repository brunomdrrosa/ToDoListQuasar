<template>
  <q-page padding>
    <ul>
      <tarefa
        v-for="(tarefa, index) in tarefas"
        :key="id"
        :tarefa="tarefa"
        :index="index"
        >{{ tarefa.nome }}</tarefa
      >
    </ul>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      tarefas: [
        {
          id: 1,
          nome: "Terminar os filmes da minha lista",
          prazo: "31/07/2022",
          horario: "23:59",
        },
        {
          id: 2,
          nome: "Ler um livro",
          prazo: "28/07/2022",
          horario: "12:30",
        },
        {
          id: 3,
          nome: "Arrumar as malas para viajar",
          prazo: "15/07/2022",
          horario: "23:59",
        },
      ],
    };
  },
  methods: {
    deletarTarefa(index) {
      this.tarefas.splice(index, 1);
    },
  },
  components: {
    tarefa: require("components/Tarefa.vue").default,
  },
};
</script>

<style></style>
