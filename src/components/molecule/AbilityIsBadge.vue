<script setup>
    import { I18n } from '@/modules/I18n'
    import Badge from '@/components/atom/Badge.vue'

    defineProps({
        ability: { type: Object, required: true },
    })

    const i18n = I18n()
</script>

<template>
    <Badge color="purple">
        {{ ability.is.map(e => i18n.t(e)).join(', ') }}
    </Badge>
</template>
