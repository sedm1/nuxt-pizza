<template>
    <section class="breadcrumbs">
        <div class="container">
            <div class="breadcrumbs__block">
                <NuxtLink class="breadcrumbs__item" to="/">Главная</NuxtLink>
                <NuxtLink 
                class="breadcrumbs__item"
                v-for="pizzaPathItem in pizzaPath"
                :key="pizzaPathItem.id"
                :to="pizzaPathItem.link"
                >{{ pizzaPathItem.title }}</NuxtLink>
            </div>
        </div>
        
    </section>
</template>
<script setup>
const {pizzaPath} = defineProps({
    pizzaPath: Array
})
</script>

<style lang="sass" scoped>
.breadcrumbs
    &__block
        display: flex
        align-items: center
        gap: 15px
    &__item
        font-size: 14px
        font-weight: 400
        &:last-child
            opacity:  0.6
</style>