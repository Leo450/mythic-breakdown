<script setup>
    import { Dungeon } from '@/data/enum/Dungeon'
    import Icon from '@/components/atom/Icon.vue'
    import { I18n } from '@/modules/I18n'

    const i18n = I18n()
</script>

<template>
    <div class="main-header flex items-center justify-center">
        <Icon
            icon="cyclone"
            size="4xl"
            color="yellow"
            class="mr-4"
        />
        <menu class="main-menu flex justify-center">
            <RouterLink
                v-for="slug in Dungeon"
                :to="{ name: 'dungeon', params: { dungeon: slug } }"
                class="main-menu__item p-4 text-lg"
            >
                {{ i18n.t(`dungeon:${slug}`) }}
            </RouterLink>
        </menu>
    </div>
</template>

<style lang="scss">
    .main-menu {
        &__item {
            opacity: .5;

            &.router-link-active {
                opacity: 1;
                color: $color-yellow;
            }
        }
    }
</style>