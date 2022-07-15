<template>
  <q-item
    @click="
      atualizarTarefa({ id: id, updates: { completada: !tarefa.completada } })
    "
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
          <q-item-label class="row justify-end" caption>
            <small>{{ tarefa.horarioPrazo }}</small>
          </q-item-label>
        </div>
      </div>
    </q-item-section>

    <q-item-section side>
      <q-btn
        @click.stop="avisoDeletar(id)"
        flat
        round
        dense
        color="negative"
        icon="delete"
      />
    </q-item-section>
  </q-item>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: ["tarefa", "id"],
  methods: {
    ...mapActions("tarefas", ["atualizarTarefa", "deletarTarefa"]),
    avisoDeletar(id) {
      this.$q
        .dialog({
          title: "Confirmação",
          message: "Você quer realmente deletar essa tarefa?",
          cancel: true,
          persistent: true,
        })
        .onOk(() => {
          this.deletarTarefa(id);
        });
    },
  },
};
</script>

<style></style>
