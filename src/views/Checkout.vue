<template lang="pug">
div.padding
    h3.center-align Checkout
    .space
    div.fill.medium-height.middle-align.center-align(v-if="!store.cart.items.length")
        .center-align
            i.extra shopping_cart
            h5 You have no items in your cart
            p Click the button to start shopping
            .space
            nav.center-align
                <router-link to="/shop">
                    button.round Shop
                </router-link>
    div(v-else)
        .grid.center-align
            .s4
                div Product
            .s2
                div Description
            .s2
                div Quantity
            .s2
                div Price
            .s2
                div Remove
        .large-space
        div(v-for="item in store.cart.items" :key="item.id")
            .grid.middle-align.center-align
                .s4
                    img.responsive(:src="item.imageUrl" :alt="item.name")
                .s2
                    div {{ item.name }}
                .s2
                    a
                        span(@click="store.cart.remove(item)") &#10094;
                    span.padding {{ item.quantity }}
                    a
                        span(@click="store.cart.add(item)") &#10095;
                .s2
                    div {{ item.price*item.quantity }}
                .s2
                    div
                        button.round.border(@click="store.cart.removeAll(item)") remove
        
</template>

<script setup>
import store from '../store/index.js';


</script>

<style lang="scss" scoped>

</style>