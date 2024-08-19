<template>
    <div>
        <LayoutTheHeader></LayoutTheHeader>
        <main>
            <UxVTabs :pizzaPath="[{id: 1, title: Pizza.CurrentPizza.pizzaTitle, link: ''}]"></UxVTabs>
            <section class="main">
                <div class="container">
                    <div class="main__block">
                        <div class="main__img"><img :src="'/img/pizza/'+Pizza.CurrentPizza.pizzaImg" alt="PizzaImg"></div>
                        <div class="main__info">
                            <h1 class="main__title">{{ Pizza.CurrentPizza.pizzaTitle }}</h1>
                            <p class="main__descript">{{ Pizza.CurrentPizza.pizzaDescription }}</p>
                            <div class="main__size">
                                <div class="main__size-item">
                                    <input 
                                    type="radio" 
                                    name="size" 
                                    id="size-1"
                                    value="Маленькая"
                                    v-model="pizzaSize"
                                    checked
                                    >
                                    <label for="size-1">Маленькая</label>
                                </div>
                                <div class="main__size-item">
                                    <input 
                                    type="radio" 
                                    name="size" 
                                    id="size-2"
                                    value="Средняя"
                                    v-model="pizzaSize"
                                    >
                                    <label for="size-2">Средняя</label>
                                </div>
                                <div class="main__size-item">
                                    <input 
                                    type="radio" 
                                    name="size" 
                                    id="size-3"
                                    value="Большая"
                                    v-model="pizzaSize"
                                    >
                                    <label for="size-3">Большая</label>
                                </div>
                            </div>
                            <div class="main__dough">
                                <div class="main__dough-item">
                                    <input 
                                    type="radio" 
                                    name="dough" 
                                    id="dough-1"
                                    v-model="doughType"
                                    value="Классическое"
                                    >
                                    <label for="dough-1">Классическое</label>
                                </div>
                                <div class="main__dough-item">
                                    <input 
                                    type="radio" 
                                    name="dough" 
                                    id="dough-2"
                                    v-model="doughType"
                                    value="Тонкое"
                                    checked
                                    >
                                    <label for="dough-2">Тонкое</label>
                                </div>
                            </div>
                            <button class="main__button" @click="AddProductToCart(Pizza.CurrentPizza)">Добавить в корзину за {{Pizza.CurrentPizza.pizzaPrice  }}₽</button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    </div>
</template>
<script setup>
import { usePizza } from '~/stores/Pizza';
import { useCart } from '~/stores/Cart';

const route = useRoute()
const Pizza = usePizza()
const Cart = useCart()

Pizza.CurrentPizza = []
Pizza.GET_PIZZA_FROM_ID(route.params.id)

useSeoMeta({
    title: () => Pizza.CurrentPizza.pizzaTitle
})
onMounted(()=>{
    document.body.classList.remove('body-block')
})
let pizzaSize = ref('Маленькая')
let doughType = ref('Тонкое')

function AddProductToCart(ProductItem){
    //Для глубокого копирования
    let item = JSON.parse(JSON.stringify(ProductItem))
    item.pizzaSize = pizzaSize.value
    item.doughType = doughType.value
    item.count = 1
    
    Cart.AddToCart(item)
}
</script>
<style lang="sass" scoped>
.main
    &__block
        display: flex
        align-items: flex-start
        justify-content: center
        gap: 50px
    &__img
        display: flex
        align-items: center
        justify-content: center
        background: #FFF7EE
        border-radius: 20px
        padding: 35px
        max-width: 570px
        width: 100%
    &__title
        font-size: 34px
        font-weight: 800
        margin-bottom: 15px
    &__descript
        font-size: 14px
        opacity: 0.4
    &__size, &__dough
        margin-top: 25px
        display: flex
        align-items: center
        justify-content: space-between
        border-radius: 30px
        background: #ECECEC
        padding: 2px
        &-item 
            width: 100%
            text-align: center
            input 
                display: none
                &:checked + label
                    background: $white

            label
                cursor: pointer
                width: 100%
                text-align: center
                border-radius: 28px
                padding: 10px 0px
                display: block
    &__button
        margin-top: 60px
        color: $white
        background: $orange
        border-radius: 18px
        border: 1px solid $orange
        padding: 16px 30px
        font-size: 16px
        font-weight: 700
        transition: .3s
        &:hover
            background: $white
            color: $orange

                
                


</style>