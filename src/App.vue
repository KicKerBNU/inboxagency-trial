<script>
import Navigation from './views/Navigation.vue';

export default {
  name: 'App',
  components: {
    Navigation
  }
}
</script>
<template lang="pug">
header
  <Navigation />
main
  <router-view />
</template>

<style scoped>
header {
    padding: 0 0 0 0;
}
</style>
  