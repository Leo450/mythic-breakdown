<script setup>
    defineProps({
        color: { type: String, default: 'yellow' },
    })
</script>

<template>
    <div
        class="badge"
        :class="{
            [`badge--${color}`]: true,
        }"
    >
        <slot />
    </div>
</template>

<style lang="scss">
    .badge {
        display: inline-block;
        padding: 0 4px;
        border-radius: 8px;
        color: $color-black;
        font-size: 14px;
        font-weight: bold;
        cursor: default;

        &--yellow {
            background-color: $color-yellow;
        }
        &--purple {
            background-color: $color-purple;
        }
    }
</style>