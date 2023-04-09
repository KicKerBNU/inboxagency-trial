<template lang="pug">
div.padding(v-if="categories").grid    
    div(v-for="(category, index) in categories" :key="category.id" :class="index < 3 ? 's4' : 's6'")
        article.no-padding(v-if="index < 4")
            img.responsive.medium(:src="category.imageUrl" :alt="category.title")
            div.absolute.bottom.left.right.padding.bottom-shadow.white-text
                nav
                    h5.upper {{ category.title }}
        article.no-padding(v-if="index >= 4")
            img.responsive.medium(:src="category.imageUrl" :alt="category.title")
            div.absolute.bottom.left.right.padding.bottom-shadow.white-text
                nav
                    h5.upper {{ category.title }}
</template>

<script setup>
import { ref } from 'vue'

const categories = ref([
    {
      "id": 1,
      "title": "hats",
      "imageUrl": "https://i.ibb.co/cvpntL1/hats.png",
      "route": 'shop/hats'
    },
    {
      "id": 2,
      "title": "jackets",
      "imageUrl": "https://i.ibb.co/px2tCc3/jackets.png",
      "route": 'shop/jackets'
    },
    {
      "id": 3,
      "title": "sneakers",
      "imageUrl": "https://i.ibb.co/0jqHpnp/sneakers.png",
      "route": 'shop/sneakers'
    },
    {
      "id": 4,
      "title": "womens",
      "imageUrl": "https://i.ibb.co/GCCdy8t/womens.png",
      "route": 'shop/womens'
    },
    {
      "id": 5,
      "title": "mens",
      "imageUrl": "https://i.ibb.co/R70vBrQ/men.png",
      "route": 'shop/mens'
    }
]);
</script>

<style lang="scss" scoped>
    
</style>