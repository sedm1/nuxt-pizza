<template>
    <div class="modal__bg">
        <div class="modal__cart">
            <div 
            v-if="Cart.Cart.length == 0"
            class="modal__cart-empty"
            >
                <div class="modal__empty-icon"><img src="/img/empty.svg" alt="ModalEmpty"></div>
                <h3 class="modal__empty-title">Корзина пустая</h3>
                <p class="modal__empty-descript">Добавьте хотя бы одну пиццу, чтобы совершить заказ</p>
                <button class="modal__empty-button" @click="ModalCart.CloseCart()">Вернуться назад</button>
            </div>
            
            <div 
            v-else
            class="modal__cart-cart"
            >
                <div class="modal__cart-main">
                    <div class="modal__main-header">
                        <h3 class="modal__main-title">В козрине {{ CartCount }}</h3>
                        <button @click='ModalCart.CloseCart()' class="modal__main-close"><img src="/img/close.svg" alt="CloseIcon"></button>
                    </div>
                    <div class="modal__main-block">
                        <CartItem
                        v-for="CartItem in Cart.Cart" 
                        :ProductItem="CartItem"
                        :key="CartItem.id + CartItem.pizzaSize + CartItem.doughType"
                        @increment="incrementProduct"
                        @decrement="decrementProduct"
                        ></CartItem>
                    </div>
                </div>
                <div class="modal__cart-footer">
                    <div class="modal__footer-item">
                        <div class="modal__footer-title">Итого:</div>
                        <p class="modal__footer-count">{{Cart.CartPrice}} ₽</p>
                    </div>
                    <div class="modal__footer-item">
                        <div class="modal__footer-title">Налог 5%: </div>
                        <p class="modal__footer-count">{{tax}}₽</p>
                    </div>
                    <button class="modal__footer-button">Оформить заказ</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { useCart } from '@/stores/Cart';
import { useModalCart } from '~/stores/ModalCart';
const Cart = useCart()
const ModalCart = useModalCart()

const CartCount = computed(() => {
    let count = Cart.Cart.length
    let st = ''
    if (count == 1){
        st = ' товар'
    } else if(count >= 2 && count <= 4){
        st = ' товара'
    } else {
        st = ' товаров'
    }

    return count + st
})
function decrementProduct(item){
    Cart.DecrementProduct(item)
}
function incrementProduct(item){
    Cart.IncrementProduct(item)
}
const tax = computed(() => {
    return Math.round(Cart.CartPrice * 0.05)
})
</script>
<style lang="sass" scoped>
.modal
    &__bg
        position: fixed
        top: 0
        left: 0
        display: flex
        justify-content: flex-end
        width: 100%
        height: 100vh
        background: rgba(0, 0, 0, 0.4)
        z-index: 3
    &__cart
        max-width: 395px
        width: 100%
        background: #F4F1EE
        &-empty 
            height: 100%
            width: 100%
            display: flex
            align-items: center
            justify-content: center
            padding: 0px 82px
            flex-direction: column
            text-align: center
            background: $white
        &-cart 
            width: 100%
            height: 100%
            display: flex
            align-items: center
            justify-content: space-between
            flex-direction: column
        &-main
            width: 100%
        &-footer 
            background: $white
            padding: 30px 35px
            width: 100%
    &__empty
        &-icon 
            max-width: 120px
            width: 100%
            margin-bottom: 20px
        &-title 
            font-size: 22px
            font-weight: 600
            margin-bottom: 5px
        &-descript
            font-size: 16px
            font-weight: 40
            opacity: 0.6
        &-button 
            color: $white 
            background: $orange
            width: 100%
            border-radius: 18px
            border: 1px solid $orange
            padding: 17px 0px
            margin-top: 35px
            transition: .3s
            &:hover 
                background: $white 
                color: $orange
    &__main
        &-header 
            display: flex
            align-items: center
            justify-content: space-between
            padding: 20px
        &-title
            font-size: 20px
            font-weight: 700 
        &-close
            width: 20px
        &-block 
            display: flex
            flex-direction: column
            gap: 10px
            max-height: 350px
            overflow-y: auto
    &__footer
        &-item 
            display: flex
            align-items: center
            justify-content: space-between
            margin-bottom: 15px
            border-bottom: 1px dashed #DFDFDF
        &-title 
            font-size: 16px
            font-weight: 400
            background: $white
            margin-bottom: -5px
        &-count 
            font-size: 18px
            font-weight: 700
            background: $white
            margin-bottom: -5px
        &-button 
            background: $orange
            border-radius: 18px
            color: $white
            border: 1px solid $orange
            transition: .3s
            font-size: 16px
            font-weight: 700
            width: 100%
            padding: 16px 0px
            margin-top: 5px
            &:hover 
                background: $white
                color: $orange

</style>