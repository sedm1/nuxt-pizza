<template>
    <div class="products__item">
        <div class="products__item-img"><img :src='"/img/pizza/" + ProductsItem.pizzaImg' alt="ProductsImg"></div>
        <div class="products__item-info">
            <h4 class="products__item-title">{{ProductsItem.pizzaTitle}}</h4>
            <p class="products__item-descript">{{ ProductsItem.pizzaDescription }}</p>
            <div class="products__item-footer">
                <div class="products__item-price">от <span>{{ ProductsItem.pizzaPrice }} ₽</span></div>
                <nuxt-link 
                :to="{name: 'pizza-id', 
                params: {id: ProductsItem.id}
                }" 
                class="products__item-button">Заказать</nuxt-link> 
            </div>
        </div>
    </div>
</template>
<script setup>
const props = defineProps({
    ProductsItem: {
        type: Object
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
        display: -webkit-box
        -webkit-line-clamp: 3
        -webkit-box-orient: vertical
        overflow: hidden
    &-footer 
        margin-top: 13px
        display: flex
        align-items: center
        justify-content: space-between
    &-price 
        font-size: 20px
        font-weight: 400
        span 
            font-weight: 700
            font-size: 20px
    &-button 
        padding: 11px 16px
        border-radius: 15px
        background: #FFFAF4
        color: $orange
        font-size: 16px
        font-weight: 500
        transition: .3s
        &:hover 
            color: $white 
            background: $orange
    
</style>