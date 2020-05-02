<template>
  <div id="app">
    <HeaderBar />
    <div id="body-content">
      <LocalBar />
      <router-view />
    </div>
  </div>
</template>

<script>
import HeaderBar from "./components/HeaderBar.vue";
import LocalBar from "./components/LocalBar.vue";

export default {
  name: "App",
  components: {
    HeaderBar,
    LocalBar
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0 auto;
}

#body-content {
  margin: 0 30px;
}
</style>
