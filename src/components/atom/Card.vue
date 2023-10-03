<template>
    <div class="card">
        <slot />
    </div>
</template>

<style lang="scss">
    .card {
        background-color: $color-bg-light;
        border: 1px solid $color-border-light;
        padding: .25rem;
    }
</style>