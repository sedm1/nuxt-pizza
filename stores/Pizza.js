import { defineStore } from "pinia";

export const usePizza = defineStore('Pizza', {
    state: () => ({
        PizzaState: [],
        PizzaIngridients: []
    }),
    actions: {
        GET_ALL_PIZZA_FROM_DB(){
            (async () => {
                try {
                    const config = useRuntimeConfig()
                    const params = new FormData
                    params.append('query', 'all')
                    const pizza = await $fetch(`${config.public.Api}/pizza.php`, {
                        method: 'POST',
                        body: params
                    })
                    return pizza
                }
                catch(err){
                    console.log('Ошибка при получении пиццы с БД: ' + err)
                    return err
                }
            })()
            .then((res) => {
                if (res.status == 1){
                    this.PizzaState = res.data
                } else {
                    console.log('Ошибка при получении пиццы с БД')
                }
                
            })
            .catch((err) => {
                console.log('Ошибка при получении пиццы с БД: ' + err)
                return err
            })
        },
        GET_INGRIDIENTS_OF_PIZZA(){
            (async () => {
                try {
                    const config = useRuntimeConfig()
                    const params = new FormData
                    params.append('query', 'ingridients')
                    const ingridients = await $fetch(`${config.public.Api}/pizza.php`, {
                        method: 'POST',
                        body: params
                    })
                    return ingridients
                } catch(err){
                    console.log('Ошибка при получении ингридиентов: ' + err)
                    return err
                }
            })()
            .then((res) => {
                if (res.status == 1){
                    this.PizzaIngridients = res.data
                } else {
                    console.log('Ошибка при получении ингридиентов')
                return err
                }
            })
            .catch((err) => {
                console.log('Ошибка при получении ингридиентов: ' + err)
                return err
            })
            
        }
    }
})