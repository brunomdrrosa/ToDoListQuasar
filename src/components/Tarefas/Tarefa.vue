<template>
  <q-item
    @click="tarefa.completada = !tarefa.completada"
    :class="!tarefa.completada ? 'bg-orange-1' : 'bg-green-1'"
    clickable
    v-ripple
  >
    <q-item-section side top>
      <q-checkbox v-model="tarefa.completada" />
    </q-item-section>

    <q-item-section>
      <q-item-label :class="{ 'text-strikethrough': tarefa.completada }">{{
        tarefa.nome
      }}</q-item-label>
    </q-item-section>

    <q-item-section side>
      <div class="row">
        <div class="column justify-center">
          <q-icon name="event" size="18px" class="q-mr-xs" />
        </div>
        <div class="column">
          <q-item-label class="row justify-end" caption>{{
            tarefa.dataPrazo
          }}</q-item-label>
          <q-item-label caption>
            <small>{{ tarefa.horarioPrazo }}</small>
          </q-item-label>
        </div>
      </div>
    </q-item-section>
  </q-item>
</template>

<script>
export default {
  props: ["tarefa", "id"],
};
</script>

<style></style>
