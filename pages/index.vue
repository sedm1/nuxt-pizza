<template>
    <div>
        <TheHeader></TheHeader>
        <main>
            <section class="main">
                <div class="container">
                    <h2 class="section__title">Все пиццы</h2>
                    <div class="main__block">
                        <aside></aside>
                        <ProductsBlock :products="Pizza.PizzaState"></ProductsBlock>
                    </div>
                </div>
            </section>
        </main>
    </div>
</template>
<script setup>
import { usePizza } from '~/stores/Pizza';
useHead({
    title: "Главная страница"
})
const Pizza = usePizza()

onMounted(() => {
    Pizza.GET_ALL_PIZZA_FROM_DB()
})

</script>
<style lang="sass" scoped>
.main
    &__block
        margin-top: 40px
</style>