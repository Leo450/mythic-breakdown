<script setup>
    import Badge from '@/components/atom/Badge.vue'
    import { I18n } from '@/modules/I18n'

    defineProps({
        ability: { type: Object, required: true },
    })

    const i18n = I18n()
</script>

<template>
    <Badge>
        {{ ability.do.map(e => i18n.t(e)).join(', ') }}
    </Badge>
</template>
