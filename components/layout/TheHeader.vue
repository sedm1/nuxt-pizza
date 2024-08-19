<template >
    <header>
        <div class="container">
            <router-link to="/" class="header__logo"><img src="/img/logo.svg" alt="HeaderLogo"></router-link>
            <form action="" class="header__form">
                <div class="header__form-icon"><img src="/img/search-icon.svg" alt="SearchIcon"></div>
                <input 
                type="text" 
                class="header__form-input" 
                placeholder="Поиск пиццы" 
                v-model="searchQuery"
                :class="{'header__form-input-active': searchQuery.length > 0}"
                >
                <Teleport to="#teleports">
                    <transition name="fade">
                        <SearchSerchBlock 
                        v-if="searchQuery.length > 0" 
                        :searchItems="SeachProducts"
                        ></SearchSerchBlock>
                    </transition>
                    
                </Teleport>
                
            </form>
            <div class="header__right">
                <button class="header__right-button">
                    <img src="/img/user-icon.svg" alt="Usericon">
                    <p>Войти</p>
                </button>
                <button class="header__right-cart" @click="ModalCart.OpenCart()">
                    
                    <img src="/img/cart-icon.svg" alt="CartIcon" class="header__right-cartIcon">
                    <p class="header__right-price">{{ Cart.CartPrice }}₽</p>
                </button>
            </div>
        </div>
    </header>
</template>
<script setup>
import { useCart } from '@/stores/Cart';
import { useModalCart } from '~/stores/ModalCart';
import { usePizza } from '~/stores/Pizza';
const Cart = useCart()
const ModalCart = useModalCart()
const Pizza = usePizza()

let SeachProducts = ref([1,2, 3])
let searchQuery = ref('')

watch(searchQuery, (newSearchQuery) => {
    if(newSearchQuery.length){
        document.body.classList.add('body-block')
        SeachProducts.value = Pizza.PizzaState.filter((item)=>{
            return item.pizzaTitle.toLowerCase().includes(searchQuery.value.toLowerCase())
        })
    } else {
        document.body.classList.remove('body-block')
    }
})


</script>

<style lang="sass" scoped>
header
    padding: 40px 0px
    border-bottom: 1px solid #EDEDED
    .container
        display: flex
        align-items: center
        justify-content: space-between
        gap: 20px
.header
    &__logo
        max-width: 202px
        width: 100%
    &__form
        max-width: 764px
        width: 100%
        position: relative
        height: 50px
        &-input 
            width: 100%
            background: $gray
            padding: 14px 48px
            font-size: 16px
            border-radius: 15px
            &-active 
                position: absolute
                z-index: 4
        &-icon 
            position: absolute
            top: 50%
            transform: translateY(-40%)
            left: 20px
            width: 16px
            z-index: 5
    &__right
        display: flex
        align-items: center
        gap: 15px
        min-width: 190px
        &-button 
            padding: 14px
            border: 1px solid $orange
            border-radius: 15px
            display: flex
            align-items: center
            gap: 8px
            font-size: 16px
            font-weight: 600
            color: $orange
            img 
                width: 12px
        &-cart 
            display: flex 
            align-items: center
            border: 1px solid $orange 
            font-size: 16px
            padding: 14px
            border-radius: 15px
            color: $orange 
            font-weight: 600
        &-price 
            margin-left: 5px
        
</style>