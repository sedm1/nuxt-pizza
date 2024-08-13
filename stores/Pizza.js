import { defineStore } from "pinia";

export const usePizza = defineStore('Pizza', {
    state: () => ({
        PizzaState: []
    }),
    actions: {
        GET_ALL_PIZZA_FROM_DB(){
            (async () => {
                try {
                    const config = useRuntimeConfig()
                    const d = new FormData
                    d.append('query', 'all')
                    const pizza = await $fetch(`${config.public.Api}/pizza.php`, {
                        method: 'POST',
                        body: d
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
            
        }
    }
})