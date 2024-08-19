<template >
    <div class="modal__cart-item">
        <div class="modal__item-img"><img :src="'/img/pizza/'+ProductItem.pizzaImg" alt=""></div>
        <div class="modal__item-info">
            <h3 class="modal__item-title">{{ ProductItem.pizzaTitle }}</h3>
            <p class="modal__item-descript">{{ ProductItem.pizzaSize }}, {{ ProductItem.doughType }} тесто</p>
            <div class="modal__item-line"></div>
            <div class="modal__item-footer">
                <div class="modal__item-count">
                    <button class="modal__count-button" @click="decrementProduct()">-</button>
                    <div class="modal__count-item">{{ ProductItem.count }}</div>
                    <button class="modal__count-button" @click="incrementProduct()">+</button>
                </div>
                <div class="modal__item-price">{{ ProductItem.pizzaPrice }} ₽ </div>
            </div>
        </div>
    </div>
</template>
<script setup>
const {ProductItem} = defineProps({
    ProductItem: Object
})
const emit = defineEmits(['increment', 'decrement'])

function decrementProduct(){
    emit('decrement', ProductItem)
}
function incrementProduct(){
    emit('increment', ProductItem)
}
</script>
<style lang="sass" scoped>
.modal
    &__cart
        &-item
            background: $white 
            padding: 20px
            display: flex
            align-items: flex-start
            gap: 25px
    &__item
        &-img 
            max-width: 65px
            width: 100%
        &-info 
            width: 100%
        &-title 
            font-size: 16px
            font-weight: 700
            margin-bottom: 3px
        &-descript
            font-size: 14px
            font-weight: 400
            color: #A2A2A2
        &-line 
            margin-top: 10px
            height: 1px
            width: 100%
            background: #EDEDED
        &-footer
            margin-top: 10px
            display: flex
            align-items: center
            justify-content: space-between
        &-price 
            font-size: 16px
            font-weight: 700
        &-count 
            display: flex
            align-items: center
            gap: 9px
    &__count
        &-button 
            width: 30px
            height: 30px
            border-radius: 10px
            border: 1px solid $orange
            display: flex
            align-items: center
            justify-content: center
            color: $orange
            font-weight: 700
        &-item 
            font-size: 16px
            font-weight: 700

</style>