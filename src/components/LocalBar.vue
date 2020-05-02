<template>
  <b-breadcrumb class="local-bar" :items="items"></b-breadcrumb>
</template>

<script>
export default {
  name: "LocalBar",
  data() {
    return {
      items: [
        {
          text: "Pessoas físicas",
          href: "#"
        },
        {
          text: "Cadastro",
          active: true
        }
      ]
    };
  }
};
</script>

<style scoped>
.local-bar {
  background-color: inherit;
}
</style>