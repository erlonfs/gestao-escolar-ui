<template>
  <div id="app">
    <HeaderBar />
    <CadastroPessoaFisica />
  </div>
</template>

<script>
import HeaderBar from "./components/HeaderBar.vue";
import CadastroPessoaFisica from "./components/CadastroPessoaFisica.vue";

export default {
  name: "App",
  components: {
    HeaderBar,
    CadastroPessoaFisica
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  max-width: 800px;
}
</style>
