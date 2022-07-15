<template>
  <q-page padding>
    <button style="position: absolute; right: 10px" @click="contador++">
      {{ contador }}
    </button>
    <input
      v-model="mensagem"
      @keyup.esc="limparMensagem"
      @keyup.enter="alerta"
      autofocus
      :class="{ erro: mensagem.length > 22 }"
      ref="mensagemInput"
    />
    <button @click="limparMensagem">Limpar</button>

    <div>{{ mensagem.length }}</div>

    <h5 v-if="mensagem.length" class="bordaCinza">{{ mensagem }}</h5>
    <h6 v-else>Nenhuma mensagem foi enviada</h6>

    <hr />

    <p>Mensagem em maiúsculo: {{ mensagemMaiusculo }}</p>
    <p>Mensagem em minúsculo: {{ mensagemMinusculo }}</p>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      mensagem: "Eu amo o Vue.js!",
      contador: 0,
    };
  },
  computed: {
    mensagemMaiusculo() {
      console.log("mensagemMaiusculo foi acionada");
      return this.mensagem.toUpperCase();
    },
    mensagemMinusculo() {
      return this.mensagem.toLowerCase();
    },
    estiloErro() {
      if (this.mensagem.length > 22) {
        return {
          color: "red",
          background: "pink",
        };
      }
    },
  },
  methods: {
    limparMensagem() {
      this.mensagem = "";
    },
    alerta() {
      alert(this.mensagem);
    },
  },
  mounted() {
    console.log(this.$refs);
    this.$refs.mensagemInput.className = "bg-green";
  },
};
</script>

<style>
.bordaCinza {
  border: 1px solid grey;
}

input,
button {
  font-size: 22px;
}

.erro {
  color: red;
  background: pink;
}
</style>
