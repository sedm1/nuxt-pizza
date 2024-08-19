<template>
    <div class="search__bg">
        <div class="search__block">
            <SearchItem 
            v-for="SerachItem in searchItems"
            :key="SerachItem.id"
            :SerachItem="SerachItem"
            ></SearchItem>
        </div>
    </div>
</template>
<script setup>
const {searchItems} = defineProps({
    searchItems: Array
})
</script>
<style lang="sass" scoped>
.search
    &__bg
        background: rgba(0, 0, 0, 0.4)
        width: 100%
        height: 100vh
        position: fixed
        top: 0
        left: 0
        z-index: 3
        display: flex
        justify-content: center
        padding-top: 100px
        align-items: flex-start
    &__block
        background: $white
        max-width: 764px
        width: 100%
        border-radius: 10px
        padding: 10px 20px
        display: flex
        flex-direction: column
        gap: 10px
        
</style>