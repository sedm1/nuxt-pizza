export const useModalCart = defineStore('ModalCart', {
    state: () => ({
        IsCartOpen: false
    }),
    actions: {
        OpenCart(){
            document.body.classList.add('body-block')
            this.IsCartOpen = true
        },
        CloseCart(){
            document.body.classList.remove('body-block')
            this.IsCartOpen = false
        }
    }
})