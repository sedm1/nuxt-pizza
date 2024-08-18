<template>
    <div>
        <LayoutTheHeader></LayoutTheHeader>>
        <main>
            <section class="main">
                <div class="container">
                    <div class="main__block">
                        <div class="main__info">
                            <h1 class="main__title">Страница не найдена</h1>
                            <p class="main__descript">Проверьте корректность введённого адреса или повторите попытку позже</p>
                            <nuxt-link to="/" class="main__link">Вернуться на главную</nuxt-link>
                        </div>
                        <div class="main__img"><img src="/img/404.png" alt="404"></div>
                    </div>
                    
                </div>
            </section>
            
        </main>
    </div>
</template>
<script setup>

</script>
<style lang="sass" scoped>
.main
    &__block
        display: flex
        align-items: center
        justify-content: center
        gap: 30px
    &__info
        max-width: 500px
        width: 100%
    &__title
        font-size: 40px
        font-weight: 900
        margin-bottom: 10px
    &__descript
        font-size: 20px
        color: #999999
    &__link
        color: $orange
        border: 1px solid $orange
        font-size: 16px
        font-weight: 600
        padding: 14px 20px
        border-radius: 8px
        margin-top: 20px
        transition: .3s
        display: block
        width: fit-content
        &:hover 
            background: $orange
            color: $white
    &__img
        max-width: 340px
        width: 100%
</style>