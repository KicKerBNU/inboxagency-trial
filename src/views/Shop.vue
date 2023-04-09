<template lang="pug">
div.padding
    h2 Shop
    .grid(v-if="shopData")
        .s12.m6.l3(v-for="(item) in shopData" :key="item.id")
            article.no-padding
                img.responsive.medium(:src="item.imageUrl" :alt="item.name")
                div.absolute.bottom.left.right.padding.bottom-shadow.white-text
                    nav
                        div.max
                        button.blue-grey10(@click="store.cart.add(item)") add to cart
            nav
                p.upper {{ item.name }}
                div.max
                p {{ item.price }}    
    div(v-else)
        p Loading...
    div(v-if="store.cart.items.length")
        p Cart
        div(v-for="cartItem in store.cart.items")
            p {{ cartItem.name }}
            p {{ cartItem.price }}
</template>

<script setup>
import { ref } from 'vue'
import store from '../store/index.js';
const shopData = ref(
[
    {
      "id": 1,
      "name": "Brown Brim",
      "imageUrl": "https://i.ibb.co/ZYW3VTp/brown-brim.png",
      "price": 25
    },
    {
      "id": 2,
      "name": "Blue Beanie",
      "imageUrl": "https://i.ibb.co/ypkgK0X/blue-beanie.png",
      "price": 18
    },
    {
      "id": 3,
      "name": "Brown Cowboy",
      "imageUrl": "https://i.ibb.co/QdJwgmp/brown-cowboy.png",
      "price": 35
    },
    {
      "id": 4,
      "name": "Grey Brim",
      "imageUrl": "https://i.ibb.co/RjBLWxB/grey-brim.png",
      "price": 25
    },
    {
      "id": 5,
      "name": "Green Beanie",
      "imageUrl": "https://i.ibb.co/YTjW3vF/green-beanie.png",
      "price": 18
    },
    {
      "id": 6,
      "name": "Palm Tree Cap",
      "imageUrl": "https://i.ibb.co/rKBDvJX/palm-tree-cap.png",
      "price": 14
    },
    {
      "id": 7,
      "name": "Red Beanie",
      "imageUrl": "https://i.ibb.co/bLB646Z/red-beanie.png",
      "price": 18
    },
    {
      "id": 8,
      "name": "Wolf Cap",
      "imageUrl": "https://i.ibb.co/1f2nWMM/wolf-cap.png",
      "price": 14
    },
    {
      "id": 9,
      "name": "Blue Snapback",
      "imageUrl": "https://i.ibb.co/X2VJP2W/blue-snapback.png",
      "price": 16
    }
  ]);
</script>

<style lang="scss" scoped>

</style>