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
  <router-link to="/cart">
    i(title="Checkout") shopping_cart
  </router-link>
  <router-link to="/user">
    i(title="User") person
  </router-link>
</template>

<script>


</script>

<style scoped>
nav {
    padding-left: 8px;
    padding-right: 8px;
    margin-bottom: 24px;
}

</style>