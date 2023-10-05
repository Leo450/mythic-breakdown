<script setup>
    import WowIcon from '@/components/atom/WowIcon.vue'
    import AbilityDoBadge from '@/components/molecule/AbilityDoBadge.vue'
    import AbilityIsBadge from '@/components/molecule/AbilityIsBadge.vue'
    import Icon from '@/components/atom/Icon.vue'
    import { I18n } from '@/modules/I18n'

    defineProps({
        ability: { type: Object, required: true },
        noDo: { type: Boolean, default: false },
        noIs: { type: Boolean, default: false },
        noLink: { type: Boolean, default: false },
    })

    const i18n = I18n()
</script>

<template>
    <div class="ability">
        <div class="flex">
            <div>
                <WowIcon :icon="ability.icon" size="xl" />
            </div>
            <div class="ml-2">
                <div class="ability__head flex items-center">
                    <h3 class="ability__name">
                        {{ ability.name }}
                    </h3>
                    <AbilityDoBadge
                        v-if="!noDo"
                        :ability="ability"
                        class="ml-2"
                    />
                    <AbilityIsBadge
                        v-if="!noIs"
                        :ability="ability"
                        class="ml-2"
                    />
                    <a
                        v-if="!noLink"
                        :href="`https://www.wowhead.com/spell=${ability.id}`"
                        target="_blank"
                    >
                        <Icon
                            icon="launch"
                            size="2xs"
                            color="yellow"
                            class="ml-2" />
                    </a>
                </div>
                <div class="ability__body">
                    <div class="flex">
                        <p class="flex items-center text-sm">
                            <Icon icon="track_changes" size="xs" class="mr-2" />
                            <template v-if="ability.cast.time">
                                {{ ability.cast.time }}s,
                            </template>
                            {{ i18n.t(ability.cast.type) }}
                        </p>
                        <p
                            v-if="ability.target !== 'target:none'"
                            class="flex items-center text-sm ml-2"
                        >
                            <Icon icon="crop_free" size="xs" class="mr-2" />
                            {{ i18n.t(ability.target) }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>