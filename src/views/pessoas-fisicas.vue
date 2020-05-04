<template>
  <div>
    <h4 class="title">Pessoas físicas</h4>
    <b-button class="button refresh-button" @click="loadPessoasFisicas()">Atualizar</b-button>
    <p v-if="message">{{message}}</p>
    <b-table striped hover :items="pessoasFisicas"></b-table>
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import { mapActions, mapState } from "vuex";

export default {
  data() {
    return {
      message: ""
    };
  },
  methods: {
    ...mapActions(["getPessoasFisicasAction"]),
    async loadPessoasFisicas() {
      this.message = "getting the heroes, please be patient";
      await this.getPessoasFisicasAction();
      this.message = "";
    }
  },
  computed: {
    ...mapState(["pessoasFisicas"])
  }
};
</script>

