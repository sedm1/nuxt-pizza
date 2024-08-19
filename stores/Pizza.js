import { defineStore } from "pinia";
export const usePizza = defineStore('Pizza', {
    state: () => ({
        PizzaState: [],
        PizzaIngridients: [],
        CurrentPizza: []
    }),
    actions: {
        PromiseToDb(query){
            return new Promise((resolve, reject) => {
                try {
                    const config = useRuntimeConfig()
                    const params = new FormData
                    params.append('query', query)
                    const pizza = $fetch(`${config.public.Api}/pizza.php`, {
                        method: 'POST',
                        body: params
                    })
                    resolve(pizza)
                }
                catch(err){
                    console.log('Ошибка при получении с БД: ' + err)
                    reject(err)
                }
            })
            
        },
        GET_ALL_PIZZA_FROM_DB(){
            let productsPromise = this.PromiseToDb('all')
            let ingridientsPromise = this.PromiseToDb('ingridients_to_products')
            Promise.all([productsPromise, ingridientsPromise])
            .then((res) => {
                let products = res[0].data
                let ingridients = res[1].data

                products.map((e) => e.pizzaIngridients = [])

                const productsMap = new Map(products.map(item => [item.id, item]));
                ingridients.forEach(e => {
                    let item = productsMap.get(e.id);
                    if (item) {
                        item.pizzaIngridients.push(e.ingridientsSlug);
                    }
                });
                this.PizzaState = products
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
                }
            })
            .catch((err) => {
                console.log('Ошибка при получении ингридиентов: ' + err)
                return err
            })
        },
        GET_PIZZA_FROM_ID(id){
            (async () => {
                try{
                    const config = useRuntimeConfig()
                    const params = new FormData
                    params.append('query', 'id')
                    params.append('id', id)
                    const CurrentPizza = await $fetch(`${config.public.Api}/pizza.php`, {
                        method: 'POST',
                        body: params
                    })
                    return CurrentPizza

                } catch(err){
                    console.log('Ошибка при получении пиццы по ID: ' + err)
                    return err
                }
            })()
            .then((res) => {
                if (res.status !== 1){
                    return
                }
                //Если не удалось найти пиццу
                if (!res.data){
                    navigateTo('/404')
                }
                this.CurrentPizza = res.data
                
            })
            .catch((err) => {
                console.log('Ошибка при получении пиццы по ID: ' + err)
                return err
            })
        }
    }
})