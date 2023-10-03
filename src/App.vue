<script setup>
import Header from '@/components/molecule/Header.vue'
</script>

<template>
    <Header />
    <div class="container mx-auto">
        <RouterView />
    </div>
</template>

<style lang="scss">
    body {
        background-color: $color-bg-dark;
        color: #fff;
    }
</style>
