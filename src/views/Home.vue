<template lang="pug">
div.padding(v-if="categories").grid
    div.s6(v-for="category in categories" :key="category.id")
        article.no-padding
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

const msg = ref('Hello, World!')

</script>

<style lang="scss" scoped>
    
</style>