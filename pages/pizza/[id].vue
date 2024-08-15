<template>
    <div>
        <LayoutTheHeader></LayoutTheHeader>
        <main>
            <TabsVTabs :pizzaPath="[{id: 1, title: Pizza.CurrentPizza.pizzaTitle, link: ''}]"></TabsVTabs>
            <section class="main">
                <div class="container">
                    <div class="main__block">
                        <div class="main__img"><img :src="'/img/pizza/'+Pizza.CurrentPizza.pizzaImg" alt="PizzaImg"></div>
                        <div class="main__info">
                            <h1 class="main__title">{{ Pizza.CurrentPizza.pizzaTitle }}</h1>
                            <p class="main__descript">{{ Pizza.CurrentPizza.pizzaDescription }}</p>
                        </div>
                    </div>
                    
                </div>
            </section>
            
        </main>
    </div>
</template>
<script setup>
import { usePizza } from '~/stores/Pizza';

const route = useRoute()
const Pizza = usePizza()

Pizza.CurrentPizza = []
Pizza.GET_PIZZA_FROM_ID(route.params.id)


useSeoMeta({
    title: () => Pizza.CurrentPizza.pizzaTitle
})

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
</style>