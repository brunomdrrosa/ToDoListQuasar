<template>
  <li>
    <div><slot></slot> {{ index }}</div>
    <small>{{ tarefa.prazo }} @ {{ tarefa.horario }}</small>
    <button @click="deletarTarefa(index)">X</button>
  </li>
</template>

<script>
export default {
  props: ["tarefa", "index"],
};
</script>

<style></style>
