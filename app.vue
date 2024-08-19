<template>
  <div>
    <NuxtPage />
    <Teleport to="#teleports">
        <transition name="fade">
            <CartModalCart v-if="ModalCart.IsCartOpen"></CartModalCart>
        </transition>
    </Teleport>
    
  </div>
</template>
<script setup>
import { useModalCart } from './stores/ModalCart';
const ModalCart = useModalCart()
</script>
<style lang="sass">
*
    padding: 0
    margin: 0
    box-sizing: border-box
    font-family: "Nunito", sans-serif
    font-size: 14px
body
  position: relative
.body-block
    max-height: 100vh
    overflow: hidden
section
    margin-top: 40px
img
    width: 100%
    height: auto
a
    text-decoration: none
    color: inherit
    cursor: pointer
button
    font-family: inherit
    background: none
    border: 0 none
    outline: 0 none
    cursor: pointer
li
    list-style: none
.container
    max-width: 1247px
    width: 100%
    padding: 0px 20px
    margin: 0 auto
input 
    background: none
    border: 0 none
    outline: 0 none
    cursor: text
.section__title
    font-size: 36px
    font-weight: 800
.fade-enter-active, .fade-leave-active 
  transition: opacity 0.3s ease


.fade-enter-from, .fade-leave-to 
  opacity: 0

</style>