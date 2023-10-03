<script setup>
    import { computed, ref } from 'vue'
    import AnimateHeight from 'vue-animate-height'
    import Popper from 'vue3-popper'
    import Ability from '@/components/molecule/Ability.vue'
    import AbilityDoBadge from '@/components/molecule/AbilityDoBadge.vue'
    import Icon from '@/components/atom/Icon.vue'
    import Card from '@/components/atom/Card.vue'

    const props = defineProps({
        npc: { type: Object, required: true }
    })

    const opened = ref(false)
    const important = computed(() => props.npc.abilities.filter((ability) => ability.important).length)
</script>

<template>
    <div
        class="npc mb-2"
        :class="{
            'npc--opened': opened
        }"
    >
        <div class="npc__head flex items-center justify-center">
            <Icon
                :icon="opened ? 'expand_more' : 'arrow_right'"
                class="mr-2"
            />

            <h3 class="npc__head__name flex items-center font-bold text-xl cursor-pointer" @click="opened = !opened">
                {{ npc.name }}
            </h3>

            <template v-if="!opened">
                <Popper
                    v-for="ability in npc.abilities"
                    :key="ability.id"
                    placement="right"
                    offsetDistance="4"
                    hover
                >
                    <AbilityDoBadge
                        :ability="ability"
                        class="ml-2"
                    />
                    <template #content>
                        <Card>
                            <Ability
                                :ability="ability"
                                no-do
                                no-link
                            />
                        </Card>
                    </template>
                </Popper>
                <Icon
                    v-if="important"
                    icon="warning_amber"
                    color="red"
                    class="ml-2"
                />
            </template>

            <template v-else>
                <Popper
                    v-if="npc.image"
                    offsetDistance="4"
                >
                    <Icon
                        icon="visibility"
                        size="xs"
                        color="yellow"
                        class="ml-2 cursor-pointer"
                    />
                    <template #content>
                        <Card>
                            <img
                                :src="npc.image"
                                alt="npm image"
                                class="npc__head__image"
                            >
                        </Card>
                    </template>
                </Popper>
                <a
                    :href="`https://www.wowhead.com/npc=${npc.id}#abilities;mode:m`"
                    target="_blank"
                >
                    <Icon
                        icon="launch"
                        size="xs"
                        color="yellow"
                        class="ml-2"
                    />
                </a>
            </template>
        </div>

        <AnimateHeight
            :height="opened ? 'auto' : 0"
            animate-opacity
        >
            <div class="npc__body inline-block mt-2">
                <div
                    v-for="ability in npc.abilities"
                    :key="ability.id"
                    class="npc__body__row flex items-center"
                >
                    <Icon
                        v-if="ability.important"
                        icon="warning_amber"
                        color="red"
                        size="xl"
                        class="mr-2"
                    />
                    <Card class="npc__body__row__ability grow">
                        <Ability
                            :ability="ability"
                            class="w-full"
                        />
                    </Card>
                </div>
            </div>
        </AnimateHeight>

    </div>
</template>

<style lang="scss">
    .npc {
        $this: &;
        text-align: center;
        transition: padding .2s ease;

        &__head {
            &__name {
                transition: color .2s ease;
            }
            &__image {
                max-width: 24rem;
                max-height: 24rem;
            }
        }

        &__body {
            &__row {
                &__ability {
                    padding: .5rem;
                }

                &:not(:last-child) {
                    #{$this}__body__row__ability {
                        border-bottom: none;
                    }
                }
            }
        }

        &--opened {
            padding: 1em 0 0 0;

            &:first-child {
                padding-top: 0;
            }

            & + #{$this}:not(&) {
                padding: 1em 0 0 0;
            }

            #{$this}__head {
                &__name {
                    color: $color-purple;
                }
            }
        }
    }
</style>