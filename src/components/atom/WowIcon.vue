<script setup>
    defineProps({
        icon: { type: String },
        size: { type: String, default: 'md' },
    })
</script>

<template>
    <div
        class="wow-icon"
        :class="{
            [`wow-icon--${size}`]: true
        }"
        :style="{
            backgroundImage: `url(https://wow.zamimg.com/images/wow/icons/large/${icon}.jpg)`,
        }"
    ></div>
</template>

<style lang="scss">
    .wow-icon {
        background-size: cover;
        background-position: center;
        border: 1px solid $color-border-dark;

        &--sm {
            width: 16px;
            height: 16px;
        }
        &--md {
            width: 24px;
            height: 24px;
        }
        &--lg {
            width: 32px;
            height: 32px;
        }
        &--xl {
            width: 40px;
            height: 40px;
        }
    }
</style>