<template>
    <div>
        <LayoutTheHeader></LayoutTheHeader>
        <main>
            <section class="main">
                <div class="container">
                    <h2 class="section__title">Все пиццы</h2>
                    <div class="main__block">
                        <aside class="main__block-aside">
                            <h3 class="main__block-subtitle">Фильтрация</h3>
                            <div class="main__block-item">
                                <h4 class="main__item-subtitle">Цена от и до: </h4>
                                <div class="main__block-input">
                                    <input 
                                    type="number" 
                                    class="main__item-input" 
                                    placeholder="0" 
                                    min="0"
                                    v-model="minPrice"
                                    >
                                    <input 
                                    type="number" 
                                    class="main__item-input" 
                                    :placeholder="MaxPizzaPrice" 
                                    v-model="maxPrice"
                                    >
                                </div>
                            </div>
                            <div class="main__block-item">
                                <h4 class="main__item-subtitle">Ингридиенты: </h4>
                                <CheckBoxItem 
                                v-for="CheckItem in Pizza.PizzaIngridients"
                                :key="CheckItem.id"
                                :title="CheckItem.ingridientsTitle"
                                :slug="CheckItem.ingridientsSlug"
                                :value="CheckItem.ingridientsSlug"
                                v-model="ingridients"
                                @CheckBoxClick="CheckBoxClick"
                                ></CheckBoxItem>
                            </div>
                        </aside>
                        <ProductsBlock :products="products"></ProductsBlock>
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
    Pizza.GET_INGRIDIENTS_OF_PIZZA()
})
const MaxPizzaPrice = computed(() => {
    let MaxPrice = 0
    Pizza.PizzaState.map((e) => {
        if (e.pizzaPrice > MaxPrice){
            MaxPrice = e.pizzaPrice
        }
    })
    return MaxPrice
})

let ingridients = ref([])
let minPrice = ref(0)
let maxPrice = ref(5000)

const products = computed(() => {
    return Pizza.PizzaState
    .filter(item => {
        return item.pizzaPrice >=  minPrice.value
    })
    .filter(item =>{
        return item.pizzaPrice <=  maxPrice.value
    })
    .filter(item => {
        return contains(item.pizzaIngridients, ingridients.value)
    })
})
function CheckBoxClick(data){
    ingridients.value.indexOf(data) == -1 ? ingridients.value.push(data) : ingridients.value.splice(ingridients.value.indexOf(data),1)
}
function contains(where, what){
    for(var i=0; i<what.length; i++){
        if(where.indexOf(what[i]) == -1) return false;
        console.log(what[i], where)
    }
    return true;
}
</script>
<style lang="sass" scoped>
.main
    &__block
        margin-top: 40px
        display: flex
        align-items: flex-start
        justify-content: space-between
        gap: 50px
        &-aside 
            max-width: 244px
            width: 100%
        &-subtitle 
            font-size: 22px
            font-weight: 700
            margin-bottom: 30px
        &-item 
            margin-bottom: 50px
            .input__item
                margin-bottom: 15px
        &-input 
            display: flex
            align-items: center
            justify-content: space-between
            gap: 15px
        &-button 
            color: $white 
            background: $orange
            width: 100%
            padding: 15px 0px
            border-radius: 18px
            border: 1px solid $orange
            font-size: 16px
            font-weight: 700
            transition: .3s
            &:hover 
                color: $orange
                background: $white

    &__item
        &-subtitle
            font-size: 16px
            font-weight: 700
            margin-bottom: 15px
        &-input 
            width: 100%
            padding: 11px 15px
            border-radius: 10px
            border: 1px solid rgb(240, 240, 240)
            font-size: 14px
            font-weight: 400
</style>