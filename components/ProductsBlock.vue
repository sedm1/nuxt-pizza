<template >
    <div class="products__block">
        <ProductsItem 
        v-for="ProductsItem in props.products"
        :key="ProductsItem.id"
        :ProductsItem="ProductsItem"
        ></ProductsItem>
    </div>
</template>
<script setup>
const props = defineProps({
    products: {
        type: Array
    }
})

</script>
<style lang="sass" scoped>
.products__block
    display: grid
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr))
    gap: 50px
</style>