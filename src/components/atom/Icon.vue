<script setup>
    // https://fonts.google.com/icons?icon.set=Material+Icons
    defineProps({
        icon: { type: String, default: 'home' },
        size: { type: String, default: 'md' },
        color: { type: String, default: 'white' },
    })
</script>

<template>
    <span
        class="icon"
        :class="{
            [`icon--${size}`]: true,
            [`icon--${color}`]: true,
        }"
    >
        {{ icon }}
    </span>
</template>

<style lang="scss">
    .icon {
        font-family: 'Material Icons Outlined', sans-serif;

        &--2xs {
            font-size: 12px;
        }
        &--xs {
            font-size: 16px;
        }
        &--sm {
            font-size: 20px;
        }
        &--md {
            font-size: 24px;
        }
        &--lg {
            font-size: 28px;
        }
        &--xl {
            font-size: 32px;
        }
        &--2xl {
            font-size: 36px;
        }
        &--3xl {
            font-size: 40px;
        }
        &--4xl {
            font-size: 44px;
        }

        &--white {
            color: $color-white;
        }
        &--black {
            color: $color-black;
        }
        &--yellow {
            color: $color-yellow;
        }
        &--purple {
            color: $color-purple;
        }
        &--red {
            color: $color-red;
        }
    }
</style>