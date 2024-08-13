<template>
    <div class="products__item">
        <div class="products__item-img"><img :src='"/img/pizza/" + ProductsItem.img' alt="ProductsImg"></div>
        <div class="products__item-info">
            <h4 class="products__item-title">{{ProductsItem.title}}</h4>
            <p class="products__item-descript">{{ ProductsItem.description }}</p>
            <div class="products__item-footer">
                <div class="products__item-price">от {{ ProductsItem.price }} ₽</div>
                <button class="products__item-button">Собрать</button>
            </div>
        </div>
    </div>
</template>
<script setup>
const props = defineProps({
    ProductsItem: {
        type: Array
    }
})
</script>
<style lang="sass" scoped>
.products__item
    &-img 
        display: flex
        align-items: center
        justify-content: center
        border-radius: 15px
        background: #FFF7EE
        padding: 24px 0px
        img 
            max-width: 211px
            width: 100%
    &-info 
        margin-top: 15px
    &-title 
        font-size: 22px
        font-weight: 700
        margin-bottom: 7px
    &-descript
        font-size: 14px
        font-weight: 400
        color: #B1B1B1
    &-footer 
        margin-top: 13px
        display: flex
        align-items: center
        justify-content: space-between
    
</style>