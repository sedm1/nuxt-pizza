export const useModalCart = defineStore('ModalCart', {
    state: () => ({
        IsCartOpen: false
    }),
    actions: {
        OpenCart(){
            this.IsCartOpen = true
        },
        CloseCart(){
            this.IsCartOpen = false
        }
    }
})