<template>
  <div>
    <vs-crumbs></vs-crumbs>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group id="input-nome" label="Nome:" label-for="input-nome">
        <b-form-input id="input-nome" v-model="form.nome" required placeholder="Nome completo"></b-form-input>
      </b-form-group>

      <b-form-group id="input-cpf" label="CPF:" label-for="input-cpf">
        <b-form-input id="input-cpf" v-model="form.cpf" required placeholder="Número de CPF"></b-form-input>
      </b-form-group>

      <b-form-group id="input-nome-social" label="Nome social:" label-for="input-nome-social">
        <b-form-input id="input-nome-social" v-model="form.nomeSocial" required placeholder="Nome social"></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-sexo" label="Sexo:" label-for="input-sexo">
        <b-form-select id="input-sexo" v-model="form.sexo" :options="sexos" required></b-form-select>
      </b-form-group>

      <b-button type="submit" variant="primary">Cadastrar</b-button>
      <b-button type="reset" variant="danger">Limpar</b-button>
    </b-form>
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

export default {
  name: "CadastroPessoaFisica",
  components: {
    
  },

  data() {
    return {
      form: {
        nome: "",
        cpf: "",
        nomeSocial: "",
        sexo: null
      },
      sexos: [{ text: "Selecione", value: null }, "Masculino", "Feminino"],
      show: true
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.nome = "";
      this.form.cpf = "";

      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    }
  }
};
</script>