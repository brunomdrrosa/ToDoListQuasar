<template>
  <q-page class="q-pa-md">
    <q-list separator bordered>
      <q-item
        v-for="tarefa in tarefas"
        :key="tarefa.id"
        @click="tarefa.completada = !tarefa.completada"
        :class="!tarefa.completada ? 'bg-orange-1' : 'bg-green-1'" 
        clickable
        v-ripple
      >
        <q-item-section side top>
          <q-checkbox v-model="tarefa.completada" />
        </q-item-section>

        <q-item-section>
          <q-item-label :class="{ 'text-strikethrough' : tarefa.completada }">{{ tarefa.nome }}</q-item-label>
        </q-item-section>

        <q-item-section side>
          <div class="row">
            <div class="column justify-center">
              <q-icon name="event" size="18px" class="q-mr-xs" />
            </div>
            <div class="column">
              <q-item-label class="row justify-end" caption>{{ tarefa.dataPrazo }}</q-item-label>
              <q-item-label caption>
                <small>{{ tarefa.horarioPrazo }}</small>
              </q-item-label>
            </div>
          </div>
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      tarefas: [
        {
          id: 1,
          nome: "Comprar bananas",
          completada: false,
          dataPrazo: "17/07/2022",
          horarioPrazo: "18:30",
        },
        {
          id: 2,
          nome: "Enviar e-mail para o coordenador",
          completada: false,
          dataPrazo: "29/07/2022",
          horarioPrazo: "12:00",
        },
        {
          id: 3,
          nome: "Marcar consulta na dentista",
          completada: false,
          dataPrazo: "15/11/2022",
          horarioPrazo: "18:00",
        },
      ],
    };
  },
};
</script>

<style></style>
