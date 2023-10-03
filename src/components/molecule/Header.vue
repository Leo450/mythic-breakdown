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
                :to="{ name: 'dungeon', params: { dungeon: 'freehold' } }"
                class="main-menu__item p-4 text-lg"
            >
                Freehold
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
<script setup>
import Icon from '@/components/atom/Icon.vue'
</script>