<template>
    <nuxt-link :to="{name: 'pizza-id', params: {id: SerachItem.id}}" class="search__item">
        <div class="search__item-img"><img :src="'/img/pizza/'+SerachItem.pizzaImg" alt="SearchImg"></div>
        <h3 class="search__item-title">{{ SerachItem.pizzaTitle }}</h3>
        <p class="search__item-price">{{ SerachItem.pizzaPrice }}₽</p>
    </nuxt-link>
</template>
<script setup>
const {SerachItem} = defineProps({
    SerachItem: Object
})
</script>
<style lang="sass">
.search
    &__item
        display: flex
        align-items: center
        &-img 
            width: 30px
            margin-right: 12px
            display: block
            height: 30px
        &-title 
            font-display: 16px
            font-weight: 400
            margin-right: 10px
        &-price 
            font-size: 14px
            font-weight: 40
            color: #858585

</style>