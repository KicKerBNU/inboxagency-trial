<template lang="pug">
nav.brown1
  <router-link to="/">
    img.circle(src="../assets/inbox-agency.jpg" title="Home")
  </router-link>
  h5 Inbox Agency
  div.max
  <router-link to="/shop">
      i(title="Shop") checkroom
  </router-link>
  <router-link to="/checkout">
    a
      span.badge.circle(v-if="store.cart.items.length") {{ store.cart.items.length  }}
      i(title="Checkout") shopping_cart
  </router-link>
  <router-link to="/user">
    i(title="User") person
  </router-link>
</template>

<script setup>
import { ref } from 'vue'
import store from '../store/index.js';
</script>

<style scoped>
nav {
    padding-left: 8px;
    padding-right: 8px;
    margin-bottom: 24px;
}

</style>