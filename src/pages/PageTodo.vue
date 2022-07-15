<template>
  <q-page class="q-pa-md">
    <q-list separator bordered>
      <tarefa
        v-for="(tarefa, key) in tarefas"
        :key="key"
        :tarefa="tarefa"
        :id="key"
      ></tarefa>
    </q-list>
  </q-page>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters("tarefas", ["tarefas"]),
  },
  components: {
    tarefa: require("components/Tarefas/Tarefa.vue").default,
  },
};
</script>

<style></style>
