export const useCart = defineStore('Cart', {
    state: () => ({
        Cart: []
    }),
    actions: {
        AddToCart(ProductItem){
            let IsProductExist = false
            let ExistProductIndex = -1
            this.Cart.forEach((item) => {
                let IdCondition = item.id == ProductItem.id
                let SizeCondition = item.pizzaSize == ProductItem.pizzaSize
                let DoughCondition = item.doughType == ProductItem.doughType
                
                if ( IdCondition && SizeCondition && DoughCondition){
                    IsProductExist = true
                    ExistProductIndex = this.Cart.indexOf(item)
                }
            })

            if (IsProductExist){
                this.Cart[ExistProductIndex].count++
            } else {
                this.Cart.push(ProductItem)
            }
        },
        DecrementProduct(item){
            let ProductIndex = this.Cart.indexOf(item)
            if (item.count == 1){
                this.Cart.splice(ProductIndex, 1)
            } else {
                this.Cart[ProductIndex].count--
            }
        },
        IncrementProduct(item){
            let ProductIndex = this.Cart.indexOf(item)
            this.Cart[ProductIndex].count++
        }
    },
    getters: {
        CartPrice (state) {
            let price = 0
            state.Cart.forEach((item) => {
                price += +item.pizzaPrice * item.count
            })
            return price
        }
    }
})