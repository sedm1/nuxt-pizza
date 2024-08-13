<template >
    <div class="input__item">
        <input type="checkbox" :id="props.slug">
        <label :for="props.slug" class="input__item-check"></label>
        <p class="input__item-title">{{ props.title }}</p>

    </div>
</template>
<script setup>
const props = defineProps({
    title: {
        type: String
    },
    slug: {
        type: String
    }
})
</script>
<style lang="sass" scoped>
.input__item
    display: flex
    align-items: center
    gap: 12px
    &-check 
        width: 24px
        height: 24px
        min-width: 24px
        border-radius: 8px
        background: #F1F1F1
        cursor: pointer
        position: relative
        &::before
            background-image: url('/img/gal.svg')
            background-size: 9px 7px
            background-position: center center
            background-repeat: no-repeat
            position: absolute
            z-index: 1
            top: 50%
            left: 50%
            transform: translateX(-50%) translateY(-50%)
            content: ""
            width: 9px
            height: 7px
            display: none
    &-title 
        font-size: 16px
        font-weight: 400
    input 
        display: none
        &:checked + label 
            background: $orange
            &::before 
                display: block

</style>